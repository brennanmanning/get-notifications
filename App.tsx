import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  enum TIMES {
    min = "minutes",
    hours = "hours",
    days = "days",
  }

  const [text, onChangeText] = React.useState<string | undefined>();
  const [number, onChangeNumber] = React.useState<string | undefined>();
  const [timeChosen, onChoseTime] = React.useState<boolean>(false);
  const [time, onSelectedTime] = React.useState<TIMES>();
  const [hour, onChangeHour] = React.useState<string | undefined>();
  const [startHour, onChangeStartHour] = React.useState<string | undefined>();
  const [endHour, onChangeEndHour] = React.useState<string | undefined>();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>I want to be reminded to</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder="Drinking Water"
      />
      <Text style={styles.message}> every</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={onChangeNumber}
        placeholder="15"
        keyboardType="numeric"
      />
      {timeChosen && <Text style={styles.message}>{time}</Text>}
      {!timeChosen && (
        <View style={styles.listStyle}>
          <TouchableOpacity
            onPress={() => {
              onChoseTime(true);
              onSelectedTime(TIMES.min);
            }}
            style={styles.timeButton}
          >
            <Text style={styles.time}>minutes</Text>
          </TouchableOpacity>
          <View style={styles.listSpacer} />
          <TouchableOpacity
            onPress={() => {
              onChoseTime(true);
              onSelectedTime(TIMES.hours);
            }}
            style={styles.timeButton}
          >
            <Text style={styles.time}>hours</Text>
          </TouchableOpacity>
          <View style={styles.listSpacer} />
          <TouchableOpacity
            onPress={() => {
              onChoseTime(true);
              onSelectedTime(TIMES.days);
            }}
            style={styles.timeButton}
          >
            <Text style={styles.time}>days</Text>
          </TouchableOpacity>
        </View>
      )}

      {time === TIMES.days ? (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.message}> at </Text>
          <TextInput
            style={styles.input}
            value={hour}
            onChangeText={onChangeHour}
            keyboardType="numeric"
            placeholder="9"
          />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.message}> and don't notify me between </Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              value={startHour}
              onChangeText={onChangeStartHour}
              keyboardType="numeric"
              placeholder="8"
            />
            <Text style={styles.message}> - </Text>
            <TextInput
              style={styles.input}
              value={endHour}
              onChangeText={onChangeEndHour}
              keyboardType="numeric"
              placeholder="22"
            />
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={() =>
          alert(
            `Notifying you to ${text?.toLowerCase()} every ${number} ${time}`
          )
        }
        style={styles.confirmButton}
      >
        <Text style={styles.time}> Confirm </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          onChangeText(undefined);
          onChangeNumber(undefined);
          onChoseTime(false);
          onSelectedTime(undefined);
        }}
        style={styles.resetButton}
      >
        <Text style={styles.time}> Reset </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  head: {
    flexDirection: "row",
  },

  message: {
    fontSize: 24,
    color: "#888",
  },

  input: {
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderBottomColor: "#dbdbdb",
    color: "#888",
    fontSize: 24,
  },

  time: {
    fontSize: 24,
    color: "#fff",
  },

  timeButton: {
    backgroundColor: "#cccccc",
    paddingHorizontal: 4,
  },

  listStyle: {
    flexDirection: "row",
    marginTop: 4,
  },

  listSpacer: {
    paddingHorizontal: 2,
  },

  confirmButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#b2b2b2",
  },

  resetButton: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "red",
  },
});
