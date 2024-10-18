import React from 'react'
import { View, Image, Text } from 'react-native'
import { Icon, LinearProgress } from 'react-native-elements'

export default function CourseItem({ srcImg, title, teacherName, progress, rated = 5 }:  { srcImg: string, title: string, teacherName: string, progress: number, rated: number }) {
  return (
    <View className='container max-w-[310px] gap-3 flex flex-row items-center mx-auto '>
        <View className='w-[10%] mr-3'>
            <Image className='block aspect-square max-w-[50px] w-full max-h-[50px] h-full object-cover object-center' src={srcImg} />
        </View>
        <View className='w-[80%] flex flex-col  gap-[6px]'>
            <View className='flex-row items-center justify-between'>
                <Text className='text-sm font-bold w-[90%]'>{title}</Text>
                <Icon className='' color={'#5D5FEF'} name='more-vert' type='material' size={15} onPress={() => {}}/>
            </View>
            <Text className='block font-normal text-xs text-[#7879F1] '>{teacherName}</Text>
            <LinearProgress value={progress/100} variant="determinate" className='w-full' color='#EF5DA8' />
            <View className='flex flex-row items-center justify-between'>
                <Text  className='text-[8px] font-normal text-[#A49E9E]'>{progress}% complete</Text>
                <View className='flex flex-row items-center gap-[2px]'>
                    {[...Array(rated)].map((_, i) => (
                        <Icon key={i} name='star' type='material' size={10} color='#FFD700' />
                    ))}
                    {[...Array(5 - rated)].map((_, i) => (
                        <Icon key={i} name='star-border' type='material' size={10} color='#FFD700' />
                    ))}
                </View>
            </View>
        </View>
    </View>
  )
}
