import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>🧠 Welcome to the Quiz!</Text>
                <Button
                    title="Start Quiz"
                    onPress={() => navigation.navigate('Quiz')}
                    color="#0dcaf0"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#121212',
        padding: 20,
    },
    innerContainer: {
        backgroundColor: '#1f1f1f',
        padding: 30,
        borderRadius: 16,
        elevation: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    title: {
        fontSize: 26,
        color: '#f1f1f1',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
