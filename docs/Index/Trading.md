## Andy MACD

```shell
//@version=5
indicator("Custom MACD Long-R", overlay=false)

// Input variables for the first MACD
fastLength1 = input.int(55, "Fast Length 1", minval=1)
slowLength1 = input.int(89, "Slow Length 1", minval=1)
signalSmoothing1 = input.int(9, "Signal Smoothing 1", minval=1)

// Input variables for the second MACD
fastLength2 = input.int(13, "Fast Length 2", minval=1)
slowLength2 = input.int(21, "Slow Length 2", minval=1)
signalSmoothing2 = input.int(9, "Signal Smoothing 2", minval=1)

// Calculate MACD histograms
macdLine1 = ta.ema(close, fastLength1) - ta.ema(close, slowLength1)
signalLine1 = ta.ema(macdLine1, signalSmoothing1)
histogram1 = macdLine1 - signalLine1

macdLine2 = ta.ema(close, fastLength2) - ta.ema(close, slowLength2)
signalLine2 = ta.ema(macdLine2, signalSmoothing2)
histogram2 = macdLine2 - signalLine2

// Plot only the MACD histograms
plot(histogram1, title="MACD Long", color=color.new(color.red, 75), style=plot.style_histogram)
plot(histogram2, title="MACD Short", color=color.new(color.gray, 80), style=plot.style_histogram)
plot(histogram2, color=color.lime, title="MACD Short")
plot(histogram1, color=color.red, title="MACD Long")
plot(0, color=color.gray, title="zero")
```

## EMA

```shell
//@version=5
indicator("Custom Multi-EMA", overlay=true)

// Define the EMA lengths with input fields
length_1 = input.int(5, title="EMA Length 1")
length_2 = input.int(10, title="EMA Length 2")
length_3 = input.int(20, title="EMA Length 3")
length_4 = input.int(30, title="EMA Length 4")
length_5 = input.int(60, title="EMA Length 5")
length_6 = input.int(55, title="EMA Length 6")
length_7 = input.int(89, title="EMA Length 7")
length_8 = input.int(120, title="EMA Length 8")
length_9 = input.int(200, title="EMA Length 9")
length_10 = input.int(250, title="EMA Length 9")

// Toggle switches for each EMA
show_ema1 = input(true, title="Show EMA 1")
show_ema2 = input(true, title="Show EMA 2")
show_ema3 = input(true, title="Show EMA 3")
show_ema4 = input(true, title="Show EMA 4")
show_ema5 = input(true, title="SShow EMA 5")
show_ema6 = input(true, title="Show EMA 6")
show_ema7 = input(true, title="Show EMA 7")
show_ema8 = input(true, title="Show EMA 8")
show_ema9 = input(true, title="Show EMA 9")
show_ema10 = input(true, title="Show EMA 10")

// Calculate EMAs
ema1 = ta.ema(close, length_1)
ema2 = ta.ema(close, length_2)
ema3 = ta.ema(close, length_3)
ema4 = ta.ema(close, length_4)
ema5 = ta.ema(close, length_5)
ema6 = ta.ema(close, length_6)
ema7 = ta.ema(close, length_7)
ema8 = ta.ema(close, length_8)
ema9 = ta.ema(close, length_9)
ema10 = ta.ema(close, length_10)

// Plot EMAs conditionally based on toggle switches
plot(show_ema1 ? ema1 : na, color=color.red, title="5")
plot(show_ema2 ? ema2 : na, color=color.orange, title="10")
plot(show_ema3 ? ema3 : na, color=color.yellow, title="20")
plot(show_ema4 ? ema4 : na, color=color.green, title="30")
plot(show_ema5 ? ema5 : na, color=color.blue, title="60")
plot(show_ema6 ? ema6 : na, color=color.purple, title="55")
plot(show_ema7 ? ema7 : na, color=color.aqua, title="89")
plot(show_ema8 ? ema8 : na, color=color.fuchsia, title="120")
plot(show_ema9 ? ema9 : na, color=color.gray, title="200")
plot(show_ema9 ? ema9 : na, color=color.lime, title="250")


```
