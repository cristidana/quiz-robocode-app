import { Button, StyleSheet, Text, View } from 'react-native';

export default function FinalScreen({route, navigation}){
    const {score, total} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                🎉 Quiz completed!
            </Text>
            
            <Text style = {styles.scoreText}>
                Your score : {score} / {total}
            </Text>
            
            <Button 
                title = "Go Home"
                onPress = {()=> navigation.navigate('Home')}
                color="#0dcaf0" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#121212',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#f1f1f1',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    scoreText: {
        fontSize: 22,
        color: '#bbbbbb',
        marginBottom: 30,
        textAlign: 'center',
    },
});
