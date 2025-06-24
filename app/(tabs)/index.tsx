
import UserMenu from '@/components/UserMenu';
import axios from 'axios';
import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';

interface IUsers {
  createdAt: string;
  name: string;
  email: string;
  id: string;
  avatar: string;
}

export default function HomeScreen() {
  const [Users, setUsers] = React.useState<IUsers[]>([]);

  const GetUsers = async () => {
    const { data } = await axios.get("https://6851deec8612b47a2c0b78ac.mockapi.io/api/t1/REpro");
    setUsers(data);
  };

  const ListUsers = () => {
    return Users.map((User) => (
      <UserMenu key={User.id}>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: 12,
            padding: 12,
            marginBottom: 15,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
          }}
        >
          <Image
            source={{ uri: User.avatar }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              marginBottom: 10,
              borderWidth: 2,
              borderColor: '#fff',
            }}
          />
          <Text style={{ color: '#ccc' }}>ID: {User.id}</Text>
          <Text style={{ color: '#ccc' }}>E-mail: {User.email}</Text>
          <Text style={{ color: '#fff', marginBottom: 10 }}>Nome: {User.name}</Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#2196F3',
              paddingVertical: 6,
              paddingHorizontal: 14,
              borderRadius: 8,
            }}
            onPress={() => alert(`Mais sobre ${User.name}`)}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Ver Mais</Text>
          </TouchableOpacity>
        </View>
      </UserMenu>
    ));
  };

  React.useEffect(() => {
    GetUsers();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10 }}>
        {ListUsers()}
      </View>
    </ScrollView>
  );
}


