// configuraçoes da minhas rotas 

import { createNativeStackNavigator} from '@react-navigation/native-stack';
import BemVindo from '../pages/BemVindo'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro';

const stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <stack.Navigator>
            <stack.Screen
             name='Bem Vindo'
              component={BemVindo}
              options={{headerShown: false}}
            />

            <stack.Screen
             name='Login'
              component={Login}
              options={{headerShown: false}}
            />  

            <stack.Screen
             name='Cadastro'
              component={Cadastro}
              options={{headerShown: false}}
            />  

        </stack.Navigator>
    )
}