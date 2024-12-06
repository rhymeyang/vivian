## Andy MACD

```shell
//@version=5
indicator("MACD Long-R", shorttitle="MACD-V", overlay=false, timeframe="", timeframe_gaps=true)

// 13,21 - 55, 89 - 144, 169
// Input variables for the first MACD
fastLength1 = input.int(144, "Fast Length 1", minval=1)
slowLength1 = input.int(169, "Slow Length 1", minval=1)
//input.int(9, "Signal Smoothing 1", minval=1)
signalSmoothing1 = 9 

// Input variables for the second MACD
fastLength2 = input.int(13, "Fast Length 2", minval=1)
slowLength2 = input.int(21, "Slow Length 2", minval=1)
// input.int(9, "Signal Smoothing 2", minval=1)
signalSmoothing2 = 9

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
## EMA - Vegas
```shell
//@version=5
indicator(title="EMA Vegas", shorttitle="EMA-Vegas", overlay=true, timeframe="", timeframe_gaps=true)

// 13, 21 - 55, 89 - 144, 169
length1 = input.int(13, minval=1)
length2 = input.int(21, minval=1)

length3 = input.int(55, minval=1)
length4 = input.int(89, minval=1)

length5 = input.int(144, minval=1)
length6 = input.int(169, minval=1)


ema1 = ta.ema(close, length1)
ema2 = ta.ema(close, length2)
ema3 = ta.ema(close, length3)
ema4 = ta.ema(close, length4)
ema5 = ta.ema(close, length5)
ema6 = ta.ema(close, length6)


show_ema1 = input(true, title="Show EMA 13")
show_ema2 = input(true, title="Show EMA 21")

show_ema3 = input(true, title="Show EMA 55")
show_ema4 = input(true, title="Show EMA 89")

show_ema5 = input(true, title="Show EMA 144")
show_ema6 = input(true, title="Show EMA 169")

color1 = color.lime
color2 = color.red
color3 = color.maroon
color4 = color.green
color5 = color.blue
color6 = color.purple

plot(show_ema1 ? ema1 : na, color=color1, title="EMA 13")
plot(show_ema2 ? ema2 : na, color=color2, title="EMA 21")

plot(show_ema3 ? ema3 : na, color=color3, title="EMA 55")
plot(show_ema4 ? ema4 : na, color=color4, title="EMA 89")

plot(show_ema5 ? ema5 : na, color=color5, title="EMA 144")
plot(show_ema6 ? ema6 : na, color=color6, title="EMA 169")
```


## MA - Vegas
```shell
//@version=5
indicator(title="MA Vegas", shorttitle="MA-Vegas", overlay=true, timeframe="", timeframe_gaps=true)

// 13, 21 - 55, 89 - 144, 169
length1 = input.int(13, minval=1)
length2 = input.int(21, minval=1)

length3 = input.int(55, minval=1)
length4 = input.int(89, minval=1)

length5 = input.int(144, minval=1)
length6 = input.int(169, minval=1)


sma1 = ta.sma(close, length1)
sma2 = ta.sma(close, length2)
sma3 = ta.sma(close, length3)
sma4 = ta.sma(close, length4)
sma5 = ta.sma(close, length5)
sma6 = ta.sma(close, length6)


show_sma1 = input(true, title="Show SMA 13")
show_sma2 = input(true, title="Show SMA 21")

show_sma3 = input(true, title="Show SMA 55")
show_sma4 = input(true, title="Show SMA 89")

show_sma5 = input(true, title="Show SMA 144")
show_sma6 = input(true, title="Show SMA 169")

color1 = color.lime
color2 = color.red
color3 = color.maroon
color4 = color.green
color5 = color.blue
color6 = color.purple

plot(show_sma1 ? sma1 : na, color=color1, title="MA 13")
plot(show_sma2 ? sma2 : na, color=color2, title="MA 21")

plot(show_sma3 ? sma3 : na, color=color3, title="MA 55")
plot(show_sma4 ? sma4 : na, color=color4, title="MA 89")

plot(show_sma5 ? sma5 : na, color=color5, title="MA 144")
plot(show_sma6 ? sma6 : na, color=color6, title="MA 169")
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
show_ema1 = input(true, title="Show EMA Length 1")
show_ema2 = input(true, title="Show EMA Length 2")
show_ema3 = input(true, title="Show EMA Length 3")
show_ema4 = input(true, title="Show EMA Length 4")
show_ema5 = input(true, title="Show EMA Length 5")
show_ema6 = input(true, title="Show EMA Length 6")
show_ema7 = input(true, title="Show EMA Length 7")
show_ema8 = input(true, title="Show EMA Length 8")
show_ema9 = input(true, title="Show EMA Length 9")
show_ema10 = input(true, title="Show EMA Length 10")

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
plot(show_ema1 ? ema1 : na, color=color.red, title="EMA 1")
plot(show_ema2 ? ema2 : na, color=color.orange, title="EMA 2")
plot(show_ema3 ? ema3 : na, color=color.yellow, title="EMA 3")
plot(show_ema4 ? ema4 : na, color=color.green, title="EMA 4")
plot(show_ema5 ? ema5 : na, color=color.blue, title="EMA 5")
plot(show_ema6 ? ema6 : na, color=color.purple, title="EMA 6")
plot(show_ema7 ? ema7 : na, color=color.aqua, title="EMA 7")
plot(show_ema8 ? ema8 : na, color=color.fuchsia, title="EMA 8")
plot(show_ema9 ? ema9 : na, color=color.gray, title="EMA 9")
plot(show_ema9 ? ema9 : na, color=color.lime, title="EMA 10")
```

## Custom MACD

```shell
//@version=5
indicator("Custom MACD Histogram Only", overlay=false)

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
plot(histogram1, title="MACD Histogram 1", color=color.new(color.gray, 50), style=plot.style_histogram)
plot(histogram2, title="MACD Histogram 2", color=color.new(color.blue, 50), style=plot.style_histogram)
```

## Boll-rsi

```shell
//@version=2
strategy("Bollinger + RSI, Double Strategy (by ChartArt) v1.1", shorttitle="CA_-_RSI_Bol_Strat_1.1", overlay=true)

// ChartArt's RSI + Bollinger Bands, Double Strategy - Update
//
// Version 1.1
// Idea by ChartArt on January 18, 2015.
//
// This strategy uses the RSI indicator
// together with the Bollinger Bands
// to sell when the price is above the
// upper Bollinger Band (and to buy when
// this value is below the lower band).
//
// This simple strategy only triggers when
// both the RSI and the Bollinger Bands
// indicators are at the same time in
// a overbought or oversold condition.
//
// In this version 1.1 the strategy was
// both simplified for the user and
// made more successful in backtesting.
//
// List of my work:
// https://www.tradingview.com/u/ChartArt/
//
//  __             __  ___       __  ___
// /  ` |__|  /\  |__)  |   /\  |__)  |
// \__, |  | /~~\ |  \  |  /~~\ |  \  |
//
//


///////////// RSI
RSIlength = input(6,title="RSI Period Length")
RSIoverSold = 50
RSIoverBought = 50
price = close
vrsi = rsi(price, RSIlength)


///////////// Bollinger Bands
BBlength = input(200, minval=1,title="Bollinger Period Length")
BBmult = 2 // input(2.0, minval=0.001, maxval=50,title="Bollinger Bands Standard Deviation")
BBbasis = sma(price, BBlength)
BBdev = BBmult * stdev(price, BBlength)
BBupper = BBbasis + BBdev
BBlower = BBbasis - BBdev
source = close
buyEntry = crossover(source, BBlower)
sellEntry = crossunder(source, BBupper)
plot(BBbasis, color=aqua,title="Bollinger Bands SMA Basis Line")
p1 = plot(BBupper, color=silver,title="Bollinger Bands Upper Line")
p2 = plot(BBlower, color=silver,title="Bollinger Bands Lower Line")
fill(p1, p2)


///////////// Colors
switch1=input(true, title="Enable Bar Color?")
switch2=input(true, title="Enable Background Color?")
TrendColor = RSIoverBought and (price[1] > BBupper and price < BBupper) and BBbasis < BBbasis[1] ? red : RSIoverSold and (price[1] < BBlower and price > BBlower) and BBbasis > BBbasis[1] ? green : na
barcolor(switch1?TrendColor:na)
bgcolor(switch2?TrendColor:na,transp=50)


///////////// RSI + Bollinger Bands Strategy
if (not na(vrsi))

    if (crossover(vrsi, RSIoverSold) and crossover(source, BBlower))
        strategy.entry("RSI_BB_L", strategy.long, stop=BBlower, oca_type=strategy.oca.cancel, comment="RSI_BB_L")
    else
        strategy.cancel(id="RSI_BB_L")

    if (crossunder(vrsi, RSIoverBought) and crossunder(source, BBupper))
        strategy.entry("RSI_BB_S", strategy.short, stop=BBupper, oca_type=strategy.oca.cancel, comment="RSI_BB_S")
    else
        strategy.cancel(id="RSI_BB_S")

//plot(strategy.equity, title="equity", color=red, linewidth=2, style=areabr)
```
