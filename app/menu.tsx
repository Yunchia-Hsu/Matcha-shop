import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import {Colors} from "@/constants/theme";
import  MENU_IMAGES  from "@/constants/MenuImages";
import { MENU_ITEMS } from "@/constants/MenuItems";

export default function  MenuScreen(){
    const colorScheme = Appearance.getColorScheme()
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme)
    const Container = Platform.OS == 'web' ? ScrollView : SafeAreaView;

    const separatoComp = <View style={styles.separator} />
    const footerComp = <Text style = {{ color: theme.text }}> End of Menu </Text>

    const headerComponent = <Text> Top of list</Text>
    const footerComponent = <Text> End of list</Text>

    return (
        <Container> 
            <FlatList 
                data={MENU_ITEMS}
                keyExtractor={(item)=> item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatoComp}
                //ListHeaderComponent={headerComponent}
                //ListFooterComponent={footerComponent}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent= {<Text> Not items</Text>}
                renderItem={({ item }) =>(
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}> {item.title} </Text>
                            <Text style={styles.menuItemText}> {item.description} </Text>
                        </View>
                        < Image source={MENU_IMAGES[item.id - 1] } style={styles.menuImage}/>

                    </View>
                )}  
            />  
        </Container>
    );   
}


function createStyles(theme) {
    return StyleSheet.create({
        contentContainer:{
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator:{
            height: 1,
            backgroundColor: theme.colorScheme === 'dark' ? 'papayawhip' : "#000",
            width: '50%',
            maxWidth: 300,
            marginHorinzontal: 'auto',
            marginBottom: 10,

        },
        footerComp:{
            marginHorizontal: 'auto',
        },
        row: {
            flexDirection: 'row',
            width:'100%',
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: theme.colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1, 
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',

        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 15,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage:{
            width: 100,
            height: 100,
        }
    })

}