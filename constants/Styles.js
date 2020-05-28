export default {

    container: {
        backgroundColor: '#17233f00',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    inputBox: {
        width: 300,
        padding: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 20,
        color: '#fff',
        marginVertical: 10,
        borderWidth: 0.2,
        borderColor: 'lightgrey'
    },

    buttonsContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },

    button: {
        width: 100,
        alignItems: 'center',
        backgroundColor: '#395697',
        margin: 10,
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,   
    },

    buttonTextStyle: {
        fontSize: 15,
        color: '#fff'
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
};