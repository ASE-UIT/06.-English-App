import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Video, ResizeMode, AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';
import colors from '../../../colors';

const { height } = Dimensions.get('window');

export default function CourseViewer() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoUri, setCurrentVideoUri] = useState('');
  const [activeTab, setActiveTab] = useState('lessons');
  const videoRef = useRef<Video>(null);

  const [lessons, setLessons] = useState([
    {
      name: "Lesson 1: Introduction",
      sections: [
        { id: 1, type: "vocab", title: "Vocabulary" },
        { id: 2, type: "grammar", title: "Grammar" },
        { id: 0, type: 'video', title: "Video lecture 1", completed: false, uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 3, type: "writing", title: 'Section 3', completed: false },
        { id: 12, type: "reading", title: 'Section 4', completed: false },
      ],
    },
    {
      name: "Lesson 2: Advanced Topics",
      sections: [
        { id: 9, type: "vocab", title: "Vocabulary" },
        { id: 10, type: "grammar", title: "Grammar" },
        { id: 4, type: 'video', title: "Video lecture 2", completed: false, uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
        { id: 5, type: "speaking", title: 'Section 1', completed: false },
        { id: 6, type: "listening", title: 'Section 2', completed: false },
        { id: 7, type: "writing", title: 'Section 3', completed: false },
        { id: 8, type: "reading", title: 'Section 4', completed: false },
      ],
    },
  ]);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.replayAsync();
    }
  };

  // khi bấm vào section thì gọi hàm này
  const handleSectionPress = (section: any) => {
    setCurrentSection(section.id);
    // nếu section là video thì phát video
    if (section.type === 'video') {
      setCurrentVideoUri(section.uri);
      setIsPlaying(true);
    }
  };

  // hàm này là logic cho việc khi phát hết video thì section được xem là completed
  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && (status as AVPlaybackStatusSuccess).didJustFinish) {
      setLessons((prevLessons) =>
        prevLessons.map((lesson) => ({
          ...lesson,
          sections: lesson.sections.map((section) =>
            section.id === currentSection ? { ...section, completed: true } : section
          ),
        }))
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Video Section */}
      <View style={styles.videoContainer}>
        <View style={styles.videoArea}>
          <Video
            ref={videoRef}
            source={{ uri: currentVideoUri }}
            style={styles.video}
            shouldPlay={isPlaying}
            resizeMode={ResizeMode.COVER}
            useNativeControls
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          />
          <TouchableOpacity
            style={styles.replayButton}
            onPress={handleReplay}
            accessibilityLabel="Replay section"
          >
            <Icon name="refresh-cw" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>
          THE COMPLETE GUIDE TO IELTS READING GENERAL
        </Text>
        <Text style={styles.subtitle}>Ms Thuy</Text>
      </View>

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'lessons' && styles.activeTab]}
          onPress={() => setActiveTab('lessons')}
        >
          <Text style={[styles.tabText, activeTab === 'lessons' && styles.activeTabText]}>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'more' && styles.activeTab]}
          onPress={() => setActiveTab('more')}
        >
          <Text style={[styles.tabText, activeTab === 'more' && styles.activeTabText]}>More</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {activeTab === 'lessons' && lessons.map((lesson, lessonIndex) => (
          <View key={lessonIndex} style={styles.lessonContainer}>
            <Text style={styles.lessonTitle}>{lesson.name}</Text>
            <View style={styles.sectionListContainer}>
              <View style={styles.row}>
                {lesson.sections
                  .filter((section) => section.type === 'vocab' || section.type === 'grammar')
                  .map((section) => (
                    <TouchableOpacity
                      key={section.id}
                      style={[
                        styles.sectionButton,
                        currentSection === section.id && styles.sectionButtonActive,
                        section.type === 'vocab' && { backgroundColor: colors.blue4, borderRadius: 20 },
                        section.type === 'grammar' && { backgroundColor: colors.blue4, borderRadius: 20 },
                      ]}
                      onPress={() => handleSectionPress(section)}
                    >
                      <Icon
                        name={section.type === 'vocab' ? 'book' : 'list'}
                        size={20}
                        color="#666"
                        style={styles.sectionIcon}
                      />
                      <Text style={styles.sectionTitle}>{section.title}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
              {lesson.sections
                .filter((section) => section.type !== 'vocab' && section.type !== 'grammar')
                .map((section) => (
                  <TouchableOpacity
                    key={section.id}
                    style={[
                      styles.sectionButton,
                      currentSection === section.id && styles.sectionButtonActive,
                    ]}
                    onPress={() => handleSectionPress(section)}
                  >
                    <Icon
                      name={
                        section.type === 'video' ? 'play' :
                        section.type === 'speaking' ? 'mic' :
                        section.type === 'listening' ? 'headphones' :
                        section.type === 'writing' ? 'edit-3' :
                        section.type === 'reading' ? 'book-open' :
                        'circle'
                      }
                      size={20}
                      color="#666"
                      style={styles.sectionIcon}
                    />
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    {'completed' in section && (
                      section.completed ? (
                        <Icon name="check-circle" size={20} color="green" />
                      ) : (
                        <Icon name="circle" size={20} color="#ccc" />
                      )
                    )}
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        ))}

        {/* content của tab more */}
        {activeTab === 'more' && (
          <View style={styles.moreContent}>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="info" size={20} color="#666" style={styles.menuIcon} />
              <Text style={styles.menuText}>About this course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="share-2" size={20} color="#666" style={styles.menuIcon} />
              <Text style={styles.menuText}>Share this course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="message-circle" size={20} color="#666" style={styles.menuIcon} />
              <Text style={styles.menuText}>Q&A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="bell" size={20} color="#666" style={styles.menuIcon} />
              <Text style={styles.menuText}>Announcements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="heart" size={20} color="#666" style={styles.menuIcon} />
              <Text style={styles.menuText}>Add course to favorite</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContainer: {
    backgroundColor: '#1c1c1e',
  },
  videoArea: {
    aspectRatio: 16 / 9,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  replayButton: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  header: {
    padding: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: colors.blue1,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.blue1,
  },
  tabText: {
    fontSize: 16,
    color: colors.blue3,
  },
  activeTabText: {
    color: colors.blue1,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 16,
  },
  lessonContainer: {
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    padding: 16,
    paddingBottom: 8,
  },
  sectionListContainer: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 4,
  },
  sectionButtonActive: {
    backgroundColor: colors.pink3,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
  },
  moreContent: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuIcon: {
    marginRight: 8,
  },
  menuText: {
    fontSize: 16,
  },
});