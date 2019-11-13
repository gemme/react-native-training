/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * typescript
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";
import {loadBooks} from "../redux-store/actions/bookActions";

type Props = {};

type Book = {
  title: string,
  author: string,
};
type State = {
  books: Array<Book>,
};

type HeaderProps = {
  title: string,
};

const Header = ({title}: HeaderProps) => {
          return <>
            <Text style={{
                  textAlign: 'center',
                  fontSize: 40,
                  color: '#f44242',
                  padding: 50,
                  fontWeight: '300'
                }}>{title}</Text>
          </>}

class BookList extends Component<Props, State> {
  /* constructor(props: Props) {
    super(props);
    this.state = {
      books: [],
    };
  } */

  /* componentDidMount() {
    fetch('https://bookreviews-api.herokuapp.com/api/Books')
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: [...data],
        });
      });
  } */
constructor(props){
    super(props)
    //this.props.loadBooks();
}

  render() {
    console.log(this.props.books);
    return (
      <View
        style={{flex: 1}}>
        <Header title={'Book Review'}/>
        {
          this.props.books.map((book, index) => {
            return (
              <View
                key={index}
                style={{
                flexDirection: 'row'
              }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Text>{index + 1}</Text>
                </View>
                <View
                  style={{
                      flex: 8
                    }}>
                  <Text>{book.title}</Text>
                  <Text style={{
                    color: 'gray'
                  }}>{book.author}</Text>
                </View>
                <View
                  style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                  <Text>Info</Text>
                </View>
              </View>
              )
          })
        }
      </View>
    );
  }

  componentDidMount(){
    this.props.loadBooks();
  }
}

const mapSateToProps = (state)=>{
    return {books:state.books}
}

const matDispatchToProps = (dispatch) => {
    return { loadBooks:()=> dispatch(loadBooks())  }
}
export default connect(mapSateToProps, matDispatchToProps)(BookList);
