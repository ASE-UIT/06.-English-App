import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Button, Icon } from '@rneui/themed'

const Lesson = () => {
  return (
    <View className='flex gap-1 mt-[10px]'>
      <Text className='text-base font-semibold'>Lesson 1</Text>
      <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }} className='text-sm font-medium'>Introduction</Text>
    </View>
  )
}

const CourseDetail = () => {

  const [isPlaylist, setIsPlaylist] = React.useState(true)
  const [isDescription, setIsDescription] = React.useState(false)

  const handlePlaylist = () => {
    setIsPlaylist(true)
    setIsDescription(false)
  }
  const handleDescription = () => {
    setIsPlaylist(false)
    setIsDescription(true)
  }


  return (
    <View className='relative w-full h-full'>
      <View className='flex mx-[45px] mt-[50px] '>
        <Image source={require('../../../assets/Frame9.png')} className='rounded-3xl w-full h-64'/>
        <Text className='text-lg font-semibold'>Reading Course For Beginer</Text>
        <Text>Created by <Text className='text-[#5D5FEF]'>Ms. Thuy</Text></Text>
        <View className='flex flex-row justify-between'>
          <View className='flex flex-row items-center gap-1'>
            <Icon name='star-o' type='font-awesome' onPress={() => {console.log('Press')}}/>
            <Text>4.5</Text>
          </View>
          <Text className='text-[#5D5FEF] text-3xl'>40$</Text>
        </View>

        <View >
          <View className='flex flex-row py-3 bg-[#A5A6F6] justify-around rounded-[20px]'>
            <Button title='Playlist' buttonStyle={{
              backgroundColor: isPlaylist ? '#5D5FEF' : '#A5A6F6',
              borderRadius: 20,
              width: 120,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={handlePlaylist}
            />
            <Button title='Description' buttonStyle={{
              backgroundColor: !isDescription ? '#A5A6F6' : '#5D5FEF',
              borderRadius: 20,
              width: 120,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={handleDescription}
            />
          </View>
          <FlatList 
            data={['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Lesson 6', 'Lesson 7', 'Lesson 8', 'Lesson 9', 'Lesson 10']} 
            renderItem={({ item }) => Lesson()} 
            style={{ display:'flex',height: '50%', marginTop: 10}}
            scrollEnabled={true}
            keyExtractor={(item, index) => index.toString()} 
          />
        </View>
        
      </View>
      <View className='flex flex-row bg-white pl-8 pr-8 pb-3 justify-around absolute bottom-0 right-0 left-0'>
        <Button buttonStyle={{
          backgroundColor: '#EF5DA8',
          borderRadius: 20,
          width: 60,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
            <Icon name='cart-outline' type='material-community' onPress={() => {console.log('Press')}}/>
        </Button>
        <Button title='BUY NOW' buttonStyle={{
          backgroundColor: '#5D5FEF',
          borderRadius: 20,
          width: 210,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}/>
      </View>
    </View>
  )
}

export default CourseDetail