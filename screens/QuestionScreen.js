import { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { questions } from '../data/questions';

export default function QuestionScreen({ navigation }) {
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(20);

    const intervalRef = useRef(null);

    const currentQuestion = questions[currentQuestionIndex];

    const startTimer = () => {
        clearInterval(intervalRef.current);
        setSecondsLeft(20);

        intervalRef.current = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev === 1) {
                    clearInterval(intervalRef.current);
                    handleTimeout();
                    return 20;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(intervalRef.current);
    }, [currentQuestionIndex]);

    const handleTimeout = () => {
        goToNextQuestion();
    };

    const handleAnswer = (option) => {
        if (selectedOption) return;

        setSelectedOption(option);
        if (option === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }

        clearInterval(intervalRef.current);

        setTimeout(() => {
            goToNextQuestion();
        }, 1000);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            clearInterval(intervalRef.current);
            navigation.navigate('Final',{
                score,
                total : questions.length
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Question {currentQuestionIndex + 1}</Text>
            <Text style={styles.timer}>⏱️{secondsLeft}</Text>
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
