import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Video, ResizeMode, AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av'; // Import AVPlaybackStatusSuccess from expo-av
import colors from '../../../colors';

export default function CourseViewer() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoUri, setCurrentVideoUri] = useState(''); // State to store the current video URI
  const videoRef = useRef<Video>(null); // Create a ref for the Video component with proper type

  const [sections, setSections] = useState([
    { id: 1, type: "vocab", title: "Vocabulary" },
    { id: 2, type: "grammar", title: "Grammar" },
    { id: 0, type: 'video', title: "Video lecture 1", completed: false, uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 3, type: "speaking", title: 'Section 1', completed: false },
    { id: 4, type: 'video', title: "Video lecture 2", completed: false, uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }, // Changed id to 4
    { id: 5, type: "speaking", title: 'Section 1', completed: false }, // Changed id to 5
    { id: 6, type: "listening", title: 'Section 2', completed: false },
    { id: 7, type: "writing", title: 'Section 3', completed: false },
    { id: 8, type: "reading", title: 'Section 4', completed: false },
  ]);

  const vocabAndGrammarSections = sections.filter(
    (section) => section.type === 'vocab' || section.type === 'grammar'
  );

  const otherSections = sections.filter(
    (section) => section.type !== 'vocab' && section.type !== 'grammar'
  );

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.replayAsync();
    }
  };

  const handleSectionPress = (section: any) => {
    setCurrentSection(section.id);
    if (section.type === 'video') {
      setCurrentVideoUri(section.uri);
      setIsPlaying(true);
    }
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && (status as AVPlaybackStatusSuccess).didJustFinish) {
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === currentSection ? { ...section, completed: true } : section
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Video Section */}
      <View style={styles.videoContainer}>
        <View style={styles.videoArea}>
          <Video
            ref={videoRef} // Attach the ref to the Video component
            source={{ uri: currentVideoUri }} // Use the current video URI from state
            style={styles.video}
            shouldPlay={isPlaying}
            resizeMode={ResizeMode.COVER} // Use the ResizeMode enum
            useNativeControls
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate} // Add the playback status update handler
          />
          {/* Replay Button */}
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
        <Text style={styles.subtitle}>Lesson 1: Introduction</Text>
      </View>

      {/* Sections List */}
      <View style={styles.sectionListContainer}>
        <ScrollView>
          <View style={styles.row}>
            {vocabAndGrammarSections.map((section) => (
                <TouchableOpacity
                key={section.id}
                style={[
                  styles.sectionButton,
                  currentSection === section.id && styles.sectionButtonActive,
                  section.type === 'vocab' && { backgroundColor: colors.blue4, borderRadius: 20},
                  section.type === 'grammar' && { backgroundColor: colors.blue4, borderRadius: 20},
                ]}
                onPress={() => handleSectionPress(section)}
                >
                <Icon
                  name={
                  section.type === 'vocab' ? 'book' : 'list'
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
          {otherSections.map((section) => (
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
        </ScrollView>
      </View>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    margin: 10,
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
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  sectionListContainer: {
    height: 400,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
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
});
