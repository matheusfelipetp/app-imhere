import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { stylesHome } from './styles';

export function Home() {
  const handleParticipantAdd = () => {
    console.log('Adicionando participante');
  };

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.eventName}>Nome do evento</Text>
      <Text style={stylesHome.eventDate}>Terça, 8 de Agosto de 2023</Text>

      <View style={stylesHome.form}>
        <TextInput
          style={stylesHome.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={stylesHome.button}
          onPress={handleParticipantAdd}
        >
          <Text style={stylesHome.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
