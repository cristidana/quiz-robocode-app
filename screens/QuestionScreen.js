import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { questions } from '../data/questions';

export default function QuestionScreen() {
    const [score, setScore] = useState(0); 
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (option) => {
        setSelectedOption(option);
        if (option === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
            }, 1000);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Intrebare</Text>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.optionButton,
                        selectedOption === option && (option === currentQuestion.correctAnswer
                            ? styles.correctOption
                            : styles.wrongOption)
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    question: {
        fontSize: 20,
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
    },
    correctOption: {
        backgroundColor: '#d4edda',
        borderColor: '#28a745',
    },
    wrongOption: {
        backgroundColor: '#f8d7da',
        borderColor: '#dc3545',
    },
    score: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
});
