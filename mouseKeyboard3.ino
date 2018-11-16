#include <BlynkSimpleStream.h>
#include <LiquidCrystal.h>

char auth[] = "b8f38de1f8f64b76b4a3dd0643924358";

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

String tmp = "";
String lesbiano0 = "";
int lesbiano1 = 0;

// Attach virtual serial terminal to Virtual Pin V1
WidgetTerminal terminal(V1);

// You can send commands from Terminal to your hardware. Just use
// the same Virtual Pin as your Terminal Widget
BLYNK_WRITE(V1)
{
  tmp = param.asStr();
  // if you type "Marco" into Terminal Widget - it will respond: "Polo:"
  if (String("Marco") == tmp) {
    terminal.println("You said: 'Marco'") ;
    terminal.println("I said: 'Polo'") ;
  } else {

    // Send it back
    terminal.print("You said:");
    terminal.write(param.getBuffer(), param.getLength());
    terminal.println();
  }

  // Ensure everything is sent
  terminal.flush();

  // lcd.setCursor(0,1);
  lcd.clear();
  lcd.print(lesbiano0);
  lcd.print(" ");
  lcd.print(lesbiano1);
}

BLYNK_WRITE(V2)
{
  lesbiano0 = param.asStr();
  lcd.print(lesbiano0);
  arreglarPos();
}
BLYNK_WRITE(V0)
{
  lesbiano1 = param.asInt();
  arreglarPos();
}

void arreglarPos()
{
  if (lesbiano1 <16)
  {
    lcd.setCursor(lesbiano1 , 0);
  }
  else
  {
    int lesbiano2 = lesbiano1 - 16;
    lcd.setCursor(lesbiano2 , 1);
  }
}

void setup()
{
  // Debug console

  // Blynk will work through Serial
  // Do not read or write this serial manually in your sketch
  Serial.begin(9600);
  lcd.begin(16, 2);
  lcd.blink();
  Blynk.begin(Serial, auth);

  // This will print Blynk Software version to the Terminal Widget when
  // your hardware gets connected to Blynk Server
  terminal.println(F("Blynk v" BLYNK_VERSION ": Device started"));
  terminal.println(F("-------------"));
  terminal.println(F("Type 'Marco' and get a reply, or type"));
  terminal.println(F("anything else and get it printed back."));
  terminal.flush();
}

void loop()
{
  Blynk.run();
}

