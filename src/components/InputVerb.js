import { FormItem, FormLayout, Group, Input, Button } from "@vkontakte/vkui";
import React from "react";



export const InputVerb = ({form1, changeText, handlerSubmit}) => (
    <Group>
        <FormLayout mode="horizontal">
            <FormItem
                top="Глагол"
            >
                <Input 
                    id="verb"
                    type="text"
                    placeholder="Введите глагол"
                    value={form1}
                    onChange={changeText}
                />
            </FormItem>
            <FormItem>
                <Button size="m" stretched onClick={handlerSubmit}>
                    Получить
                </Button>
            </FormItem>
        </FormLayout>
    </Group>

);