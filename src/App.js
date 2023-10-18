import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Epic, Root, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css'
import { 
	useActiveVkuiLocation, 
	useGetPanelForView 
} from '@vkontakte/vk-mini-apps-router';

import HomePanel from './panels/HomePanel';
import MyTabbar from './components/MyTabbar';

import { 
	Icon28NewsfeedOutline, 
	Icon28UserCircleOutline, 
	Icon28QuestionOutline 
} from '@vkontakte/icons';

const App = () => {
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('default_view');

	return (
		<Epic activeStory={activeView}
			tabbar={<MyTabbar />}
		>
			<View id={activeView} activePanel={activePanel}>
				<HomePanel nav="home_panel"/>
			</View>
		</Epic>
	);
}

export default App;
