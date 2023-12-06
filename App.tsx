// App.js
 
import   React from 'react'; 
 import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import ImageFeed, { stories } from "./src/assignment/ImageFeed";
import StoryComp from "./src/assignment/Story";
import { ImageFeedRoutes } from "./src/assignment/Model"; 

export const assets = stories
  .map((story) => [story.avatar, story.source])
  .flat();

  const Stack = createSharedElementStackNavigator<ImageFeedRoutes>();

const App = () => (   
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
      cardOverlayEnabled: true,
      cardStyle: { backgroundColor: "transparent" },
    }}
    mode="modal"
  >
    <Stack.Screen name="ImageFeed" component={ImageFeed} />
    <Stack.Screen
      name="Story"
      component={StoryComp}
      sharedElements={(route) => {
        const { id } = route.params.story;
        return [id];
      }}
    />
  </Stack.Navigator>
  </NavigationContainer>
);

export default App;
