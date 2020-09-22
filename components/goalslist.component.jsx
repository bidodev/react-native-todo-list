import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GoalsList = ({goals}) => {
    return (
        <View style={styles.list}>
            {goals.map((goal) => <Text key={goal.id}>{goal.text}</Text>)}
        </View>
    )
}

export default GoalsList

const styles = StyleSheet.create({
    list: {
        padding: 30,
    }
})
