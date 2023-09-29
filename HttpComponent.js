import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const HttpComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Địa chỉ URL của API bạn muốn gửi yêu cầu đến
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    // Gửi yêu cầu GET bằng axios
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>Data from API:</Text>
      <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
    </View>
  );
};

export default HttpComponent;
