import {StyleSheet} from "react-native";
import colorConfig from "../../shared/color";


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#2a2a50'
    },
    addButton: {
        paddingTop: 20,
        paddingLeft: colorConfig.basePadding,
        paddingRight: colorConfig.basePadding,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    scroll: {
        flex: 1
    },
    iconButton: {
        color: colorConfig.primaryColor,
    },
    addText: {
        color: colorConfig.white
    },
    dateWrapper: {
        paddingLeft: 20,
        paddingBottom: 14,
        paddingTop: 40
    },
    dateTitle: {
        fontSize: colorConfig.baseFontSize,
        color: colorConfig.title,
        fontWeight: '700'
    },
    buttonContainer: {
        paddingLeft: colorConfig.basePadding,
        paddingRight: colorConfig.basePadding,
        paddingTop: 20,
    },
    buttonWrapper: {
        backgroundColor: '#ff5171',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    record: {
        paddingTop: 6,
        paddingBottom: 6,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recordTitle: {
        paddingLeft: 10,
        color: colorConfig.white,
        fontSize: colorConfig.baseFontSize
    },
    assets: {
        width: 100,
        paddingTop: 6,
        paddingBottom: 6,
        borderLeftColor: '#ff757e',
        borderLeftWidth: 1,
    },
    assetsTitle: {
        fontSize: 14,
        textAlign: 'center',
        color: colorConfig.white,
    }
})
