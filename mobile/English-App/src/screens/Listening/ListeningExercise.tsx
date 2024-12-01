import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av'; // Import Audio from expo-av
import BottomNavigation from '../../components/QuestionNavigation';
import MultipleChoiceQuestion from '../../components/MultipleChoiceFormat/MultipleChoiceQuestion';
import questionsData from './question.json'; // Import questions from JSON file
import colors from '../../../colors';

const audio_uri = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
export default function ListeningExerciseScreen({ scrollRef }: { scrollRef?: React.RefObject<ScrollView> }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Initialize duration to 0
  const [isPlaying, setIsPlaying] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const scrollViewRef = scrollRef || useRef<ScrollView>(null);
  const [questions, setQuestions] = useState<{ id: string; text: string; options: string[]; answered: boolean }[]>(questionsData);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('./question.json');
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: audio_uri } // Online audio URL for testing
      );
      setSound(sound);

      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        if (status.durationMillis !== undefined) {
          setDuration(status.durationMillis / 1000); // Set the duration in seconds
        }
      }

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setCurrentTime(status.positionMillis / 1000);
          if (status.didJustFinish) {
            setIsPlaying(false);
          }
        }
      });
    };

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionId: string) => {
    if (!answeredQuestions.includes(questionId)) {
      setAnsweredQuestions([...answeredQuestions, questionId]);
      setQuestions(questions.map(question => 
        question.id === questionId ? { ...question, answered: true } : question
      ));
    }
  };

  const handleQuestionChange = (questionIndex: number) => {
    setCurrentQuestion(questionIndex + 1);
    scrollViewRef.current?.scrollTo({
      y: questionIndex * 150, // Adjust the scroll position as needed
      animated: true,
    });
  };

  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    }
  };

  const handleSliderValueChange = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value * 1000);
      setCurrentTime(value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Section 2</Text>
          <View style={styles.headerRight}>
          </View>
        </View>

        {/* Audio Player */}
        <View style={styles.audioPlayer}>
          <Text style={styles.playAudioText}>Play audio</Text>
          <View style={styles.playerControls}>
            <TouchableOpacity onPress={handlePlayPause}>
              <Icon
                name={isPlaying ? 'pause' : 'play'}
                size={24}
                color={colors.blue1}
              />
            </TouchableOpacity>
            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={duration}
              value={currentTime}
              onValueChange={handleSliderValueChange}
              minimumTrackTintColor="#6b4ce6"
              maximumTrackTintColor="#ddd"
              thumbTintColor="#6b4ce6"
            />
            <Text style={styles.timeText}>{formatTime(duration)}</Text>
            <Text style={styles.playbackSpeed}>Playback speed</Text>
          </View>
        </View>

        {/* Questions */}
        <View style={styles.questionsContainer}>
          <Text style={styles.questionsTitle}>Questions 1-4</Text>
          <Text style={styles.questionsInstructions}>
            Do the following statements agree with the information in the audio?
          </Text>
          {questions.map((question, index) => (
            <MultipleChoiceQuestion
              key={question.id}
              number={index + 1}
              question={question.text}
              options={question.options}
              onAnswer={() => handleAnswer(question.id)} // Pass handleAnswer as a callback
            />
          ))}
        </View>
        {/* Submit Button */}
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={() => alert('Submit pressed')}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation
        questions={questions}
        answeredQuestions={answeredQuestions}
        currentQuestion={currentQuestion}
        onQuestionChange={handleQuestionChange}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  audioPlayer: {
    padding: 16,
  },
  playAudioText: {
    fontSize: 16,
    color: '#6b4ce6',
    marginBottom: 8,
  },
  playerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  playbackSpeed: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
  questionsContainer: {
    flex: 1,
    padding: 16,
  },
  questionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  questionsInstructions: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  questionItem: {
    marginBottom: 24,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  questionText: {
    fontSize: 14,
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.pink1,
  },
  optionText: {
    color: colors.pink1,
    fontSize: 14,
  },
  submitButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  submitButton: {
    backgroundColor: colors.pink1,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

