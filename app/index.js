import React from "react";
import { View, Button, Alert } from "react-native";

import { CFPaymentGatewayService } from "react-native-cashfree-pg-sdk";
import {
  CFEnvironment,
  CFSession,
  CFDropCheckoutPayment
} from "cashfree-pg-api-contract";

export default function Index() {
  const startPayment = async () => {
    try {
      const session = new CFSession(
        "TEST_ORDER_TOKEN", 
        "order_1763744922936742",
        CFEnvironment.SANDBOX
      );

      const dropCheckout = new CFDropCheckoutPayment(session);

      CFPaymentGatewayService.doPayment(dropCheckout);
    } catch (e) {
      Alert.alert("Error", e?.message ?? "Payment error");
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 60 }}>
      <Button title="Start Cashfree Payment" onPress={startPayment} />
    </View>
  );
}
