import * as React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet
} from 'react-native';
import { SearchBox } from '../component/serachBox';
import { TodoList } from '../component/TodoList';
import { AddTodo } from '../component/AddTodo';
import axios from 'axios';

const endpoint = 'http://10.0.2.2:3001/todos/';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBoxValue: '',
      toDoList: [],
      valueTitle: '',
      valueBody: '',
      onBlur: false
    };
  }

  componentDidMount() {
    this.getTodoList();
  }

  getTodoList = () => {
    const url = `${endpoint}`;
    axios.get(url).then(response => {
      if (response.status === 200) {
        this.setState({
          toDoList: response.data,
          valueTitle: '',
          valueBody: ''
        });
      }
    });
  };

  handleGetDetails = id => {
    const { navigation } = this.props;
    const url = `${endpoint}${id}`;

    axios.get(url).then(response => {
      const todo = response.data;
      navigation.navigate('Details', {
        body: todo.body,
        title: todo.title
      });
    });
  };

  handleDelete = id => {
    const url = `${endpoint}${id}`;
    axios.delete(url).then(response => {
      if (response.data.status === 'success') {
        this.getTodoList();
      }
    });
  };

  handleSearchPress = () => {
    const { searchBoxValue } = this.state;
    const { navigation } = this.props;
    if (searchBoxValue.length) {
      const url = `${endpoint}${searchBoxValue}`;
      axios.get(url).then(response => {
        const todo = response.data;
        this.setState({ searchBoxValue: '' });
        navigation.navigate('Details', {
          body: todo.body,
          title: todo.title
        });
      });
    }
  };

  handleChange = value => {
    this.setState({ searchBoxValue: value });
  };

  handleBody = value => {
    this.setState({ valueBody: value });
  };
  handleTitle = value => {
    this.setState({ valueTitle: value });
  };

  handleBlur = () => {
    this.setState({ onBlur: !this.state.onBlur });
  };

  handleAdd = () => {
    const { valueTitle, valueBody } = this.state;
    Keyboard.dismiss();
    const body = { title: valueTitle, body: valueBody };
    const url = `${endpoint}`;
    axios.post(url, body).then(response => {
      if (response.data.status === 'success') {
        this.getTodoList();
      }
    });
  };

  render() {
    const { valueBody, valueTitle, searchBoxValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.header}>Todo List</Text>
        </View>
        <SearchBox
          value={searchBoxValue}
          handleChange={this.handleChange}
          search={this.handleSearchPress}
        />
        <TodoList
          handleDelete={this.handleDelete}
          getDetails={this.handleGetDetails}
          list={this.state.toDoList}
        />

        <KeyboardAvoidingView
          keyboardVerticalOffset={this.state.onBlur ? 50 : -500}
          behavior='padding'
          style={styles.addToDO}
        >
          <AddTodo
            valueBody={valueBody}
            valueTitle={valueTitle}
            handleBody={this.handleBody}
            handleTitle={this.handleTitle}
            onBlur={this.handleBlur}
            handleAdd={this.handleAdd}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  subContainer: { marginLeft: 8, marginVertical: 15 },
  header: { fontSize: 26 },
  addToDO: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  }
});
