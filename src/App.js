import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Group, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Div } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { AppInfo } from './components/AppInfo';
import { UserInfo } from './components/UserInfo';
import { InputVerb } from './components/InputVerb';
import { OutputVerbs } from './components/OutputVerbs';

const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const verbs = require("./data.json");
	const [form1, setForm1] = useState("");
	const [form2, setForm2] = useState("");
	const [form3, setForm3] = useState("");
	const [translate, setTranslate] = useState("");

	const changeText = e => {
		let text = e.target.value.toLowerCase();
		setForm1(text);
	};

	const handlerSubmit = () => {
		const forms = verbs.find((item) => (item.firstForm == form1));
		setForm2(forms ? forms.secondForm : "нет");
		setForm3(forms ? forms.thirdForm : "нет");
		setTranslate(forms ? forms.translate : "нет");
	};

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout header={<PanelHeader separator={false}/>}>
						<SplitCol>
							<View activePanel="main">
								<Panel id="main">
									<AppInfo />
									<UserInfo fetchedUser={fetchedUser}/>
									<InputVerb form1={form1} changeText={changeText} handlerSubmit={handlerSubmit}/>
									<OutputVerbs form2={form2} form3={form3} translate={translate}/>
								</Panel>
								
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
