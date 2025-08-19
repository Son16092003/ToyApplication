import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, placeOrderThunk } from "../reduxtollkit/slice/orderSlice";

const ConfirmCheckOut = ({ navigation }) => {
  const dispatch = useDispatch();
  const { form, product, loading, error } = useSelector((state) => state.order);

  const handleOrder = () => {
    dispatch(placeOrderThunk({ form, product })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigation.navigate("SuccessCheckOut");
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Icon
          name="arrow-back"
          style={styles.arrowBack}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Xác nhận thanh toán</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Thông tin sản phẩm */}
        <View style={styles.productCard}>
          <Image
            source={{ uri: product.image }}
            style={styles.productImage}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>
              {product.price.toLocaleString()}đ
            </Text>
          </View>
        </View>

        {/* Form nhập thông tin */}
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Họ và tên"
            style={styles.input}
            value={form.name}
            onChangeText={(text) => dispatch(updateForm({ name: text }))}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => dispatch(updateForm({ email: text }))}
          />
          <TextInput
            placeholder="Số điện thoại"
            style={styles.input}
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(text) => dispatch(updateForm({ phone: text }))}
          />
          <TextInput
            placeholder="Địa chỉ"
            style={[styles.input, { height: 80 }]}
            multiline
            textAlignVertical="top"
            value={form.address}
            onChangeText={(text) => dispatch(updateForm({ address: text }))}
          />
          {error && <Text style={{ color: "red" }}>{error}</Text>}
        </View>
      </ScrollView>

      {/* Nút đặt hàng */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonOrder}
          activeOpacity={0.7}
          onPress={handleOrder}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.textButton}>Đặt hàng</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmCheckOut;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerContainer: {
    backgroundColor: "#FFC107",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  arrowBack: { fontSize: 25, color: "#fff", paddingLeft: "5%" },
  title: { fontSize: 32, fontWeight: "bold", color: "#fff", marginLeft: "2%" },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFC107",
    padding: 12,
    marginBottom: 16,
    shadowColor: "#FFC107",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  productImage: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C4C4C",
    marginBottom: 6,
  },
  productPrice: { fontSize: 16, fontWeight: "bold", color: "#41B100" },
  formContainer: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#FAFAFA",
  },
  footer: { padding: 16 },
  buttonOrder: {
    backgroundColor: "#FFC107",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  textButton: { fontSize: 20, fontWeight: "bold", color: "#fff" },
});
