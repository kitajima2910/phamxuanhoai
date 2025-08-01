import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import PayMethodCard from "../components/PayMethodCard";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddNewButton from "../components/AddNewButton";

const PaymentScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.headerTitle}>Payment</Text>
            </View>
            <View style={styles.containerPayments}>
                <PaymentList />
            </View>
            <View style={{ display: "flex", alignItems: "center" }}>
                <BankCardBox />
            </View>
            <AddNewButton />
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: vs(57),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginStart: s(24),
    },
    headerTitle: {
        marginStart: s(18),
        fontSize: s(17),
        fontWeight: "400",
        fontFamily: "Montserrat-SemiBold",
        color: "#181C2E",
    },
    containerPayments: {
        marginTop: vs(20),
        marginStart: s(24),
    },
});
