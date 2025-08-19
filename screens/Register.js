import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PRIMARY_COLOR = "#FFC107";

const Register = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Đăng Ký</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.boxText}>
                        <TextInput
                            placeholder="Nhập Tài khoản"
                            placeholderTextColor="#fff"
                            style={styles.inputText}
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>

                    <View style={styles.boxText}>
                        <TextInput
                            placeholder="Nhập Số điện thoại"
                            placeholderTextColor="#fff"
                            keyboardType="phone-pad"
                            style={styles.inputText}
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>

                    <View style={styles.boxText}>
                        <TextInput
                            placeholder="Nhập Emai"
                            placeholderTextColor="#fff"
                            keyboardType="email-address"
                            style={styles.inputText}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.boxText}>
                        <TextInput
                            placeholder="Nhập Mật khẩu"
                            placeholderTextColor="#fff"
                            secureTextEntry={true}
                            style={styles.inputText}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <TouchableOpacity style={styles.boxTextLogin}>
                        <Text style={styles.bodyTextLogin}>Sign up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.switchMode}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.switchText}>
                            Already have an account? Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
    },
    boxContainer: {
        width: '100%',
        maxWidth: 400,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 34,
        color: 'white',
        fontWeight: 'bold',
    },
    body: {
        width: '100%',
        alignItems: 'center',
    },
    boxText: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    inputText: {
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        color: '#fafafa',
    },
    boxTextLogin: {
        width: '100%',
        height: 50,
        backgroundColor: '#2D6806',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    bodyTextLogin: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    switchMode: {
        marginTop: 10,
    },
    switchText: {
        color: '#fff',
        fontSize: 14,
    },
});
