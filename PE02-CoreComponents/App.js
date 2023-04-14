import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponentsApp = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/icon.png')} style={styles.icon} />
        <Text style={styles.headerText}>MSCS Courses</Text>
      </View>
      <Text style={styles.label}>Enter Your Favorite Course:</Text>
      <TextInput style={styles.input} />
      <View style={styles.coursesContainer}>
        <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
        <Text style={styles.courseText}>CS 504 Software Engineering</Text>
        <Text style={styles.courseText}>CS 506 Programming for Computing</Text>
        <Text style={styles.courseText}>CS 519 Cloud Computing Overview</Text>
        <Text style={styles.courseText}>CS 533 Computer Architecture</Text>
        <Text style={styles.courseText}>CS 547 Secure Systems and Programs</Text>
        <Text style={styles.courseText}>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text style={styles.courseText}>DS 510 Artificial Intelligence for Data Science</Text>
        <Text style={styles.courseText}>DS 620 Machine Learning & Deep Learning</Text>
        <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
        <Text style={styles.courseText}>CS 624 Full-Stack Development I</Text>
        <Text style={styles.courseText}>CS 628 Full-Stack Development II</Text>
        <Text style={styles.sectionHeader}>Capstone (3 Credits)</Text>
        <Text style={styles.courseText}>CS 687 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  coursesContainer: {
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: 'yellow',
  },
  courseText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default CoreComponentsApp;

