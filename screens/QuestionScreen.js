import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { questions } from '../data/questions';

export default function QuestionScreen({ navigation }) {
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const handleTimeout = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            navigation.navigate('Home');
        }
    };

    const handleAnswer = (option) => {
        if (selectedOption) return;

        setSelectedOption(option);
        if (option === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
            } else {
                navigation.navigate('Home');
            }
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Question {currentQuestionIndex + 1}</Text>
            <Text style={styles.question}>{currentQuestion.question}</Text>

            {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.optionButton,
                        selectedOption === option && (
                            option === currentQuestion.correctAnswer
                                ? styles.correctOption
                                : styles.wrongOption
                        )
                    ]}
                    onPress={() => handleAnswer(option)}
                    disabled={selectedOption !== null}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}

            <Text style={styles.score}>Score: {score}</Text>
        </View>
    );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    timer: {
        fontSize: 18,
        color: '#bbbbbb',
        marginBottom: 10,
        textAlign: 'center',
    },
    question: {
        fontSize: 20,
        color: '#f0f0f0',
        marginBottom: 20,
        textAlign: 'center',
    },
    optionButton: {
        backgroundColor: '#1e1e1e',
        padding: 15,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#333',
        width: '100%',
    },
    optionText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
    },
    correctOption: {
        backgroundColor: '#2e7d32',
        borderColor: '#2e7d32',
    },
    wrongOption: {
        backgroundColor: '#c62828',
        borderColor: '#c62828',
    },
    score: {
        marginTop: 20,
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center',
    },
});
