/**
 * @author Xanders
 * @see https://team.xsamtech.com/xanderssamoth
 */
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PADDING } from '../tools/constants';
import i18next, { languageResources } from '../services/i18next';
import languagesList from '../services/languagesList.json'
import HeaderComponent from './header';
import useColors from '../hooks/useColors';
import homeStyles from './style';

const HomeScreen = () => {
  // =============== Colors ===============
  const COLORS = useColors();
  // =============== Navigation ===============
  const navigation = useNavigation();

  return (
    <>
      {/* Header */}
      {/* <View style={{ backgroundColor: COLORS.white, paddingVertical: PADDING.p01 }}>
                <HeaderComponent />
            </View> */}

      {/* Content */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: COLORS.white, paddingHorizontal: PADDING.p01 }}>
        <SafeAreaView style={{ height: Dimensions.get('screen').height - 200, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: PADDING.p01 }}>
          <Text style={{ fontSize: 21, color: COLORS.black }}>{languagesList[item].nativeName}</Text>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default HomeScreen;