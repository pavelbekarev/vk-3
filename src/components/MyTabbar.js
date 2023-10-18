import { Epic, Root, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import React from 'react';
import { 
	Icon28NewsfeedOutline, 
	Icon28UserCircleOutline, 
	Icon28QuestionOutline 
} from '@vkontakte/icons';

export default function MyTabbar() {
    return (
        <Tabbar>
            <TabbarItem text="Главная">
                <Icon28NewsfeedOutline />
            </TabbarItem>
            <TabbarItem text="Профиль">
                <Icon28UserCircleOutline />
            </TabbarItem>
            <TabbarItem text="О программе">
                <Icon28QuestionOutline />
            </TabbarItem>
        </Tabbar>
    );
}