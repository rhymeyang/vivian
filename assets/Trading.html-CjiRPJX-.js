import{_ as n,c as a,a as t,o as p}from"./app-GsFiLjvq.js";const e={};function l(o,s){return p(),a("div",null,s[0]||(s[0]=[t(`<h2 id="andy-macd" tabindex="-1"><a class="header-anchor" href="#andy-macd"><span>Andy MACD</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">//@version<span class="token operator">=</span><span class="token number">5</span></span>
<span class="line">indicator<span class="token punctuation">(</span><span class="token string">&quot;Custom MACD Long-R&quot;</span>, <span class="token assign-left variable">overlay</span><span class="token operator">=</span>false<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">// Input variables <span class="token keyword">for</span> the first MACD</span>
<span class="line">fastLength1 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">55</span>, <span class="token string">&quot;Fast Length 1&quot;</span>, <span class="token assign-left variable">minval</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">slowLength1 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">89</span>, <span class="token string">&quot;Slow Length 1&quot;</span>, <span class="token assign-left variable">minval</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">signalSmoothing1 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">9</span>, <span class="token string">&quot;Signal Smoothing 1&quot;</span>, <span class="token assign-left variable">minval</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">// Input variables <span class="token keyword">for</span> the second MACD</span>
<span class="line">fastLength2 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">13</span>, <span class="token string">&quot;Fast Length 2&quot;</span>, <span class="token assign-left variable">minval</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">slowLength2 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">21</span>, <span class="token string">&quot;Slow Length 2&quot;</span>, <span class="token assign-left variable">minval</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">signalSmoothing2 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">9</span>, <span class="token string">&quot;Signal Smoothing 2&quot;</span>, <span class="token assign-left variable">minval</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">// Calculate MACD histograms</span>
<span class="line">macdLine1 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, fastLength1<span class="token punctuation">)</span> - ta.ema<span class="token punctuation">(</span>close, slowLength1<span class="token punctuation">)</span></span>
<span class="line">signalLine1 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>macdLine1, signalSmoothing1<span class="token punctuation">)</span></span>
<span class="line">histogram1 <span class="token operator">=</span> macdLine1 - signalLine1</span>
<span class="line"></span>
<span class="line">macdLine2 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, fastLength2<span class="token punctuation">)</span> - ta.ema<span class="token punctuation">(</span>close, slowLength2<span class="token punctuation">)</span></span>
<span class="line">signalLine2 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>macdLine2, signalSmoothing2<span class="token punctuation">)</span></span>
<span class="line">histogram2 <span class="token operator">=</span> macdLine2 - signalLine2</span>
<span class="line"></span>
<span class="line">// Plot only the MACD histograms</span>
<span class="line">plot<span class="token punctuation">(</span>histogram1, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;MACD Long&quot;</span>, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.new<span class="token punctuation">(</span>color.red, <span class="token number">75</span><span class="token punctuation">)</span>, <span class="token assign-left variable">style</span><span class="token operator">=</span>plot.style_histogram<span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>histogram2, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;MACD Short&quot;</span>, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.new<span class="token punctuation">(</span>color.gray, <span class="token number">80</span><span class="token punctuation">)</span>, <span class="token assign-left variable">style</span><span class="token operator">=</span>plot.style_histogram<span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>histogram2, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.lime, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;MACD Short&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>histogram1, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.red, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;MACD Long&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span><span class="token number">0</span>, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.gray, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;zero&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ema" tabindex="-1"><a class="header-anchor" href="#ema"><span>EMA</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">//@version<span class="token operator">=</span><span class="token number">5</span></span>
<span class="line">indicator<span class="token punctuation">(</span><span class="token string">&quot;Custom Multi-EMA&quot;</span>, <span class="token assign-left variable">overlay</span><span class="token operator">=</span>true<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">// Define the EMA lengths with input fields</span>
<span class="line">length_1 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">5</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_2 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">10</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_3 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">20</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 3&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_4 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">30</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 4&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_5 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">60</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 5&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_6 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">55</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 6&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_7 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">89</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 7&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_8 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">120</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 8&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_9 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">200</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 9&quot;</span><span class="token punctuation">)</span></span>
<span class="line">length_10 <span class="token operator">=</span> input.int<span class="token punctuation">(</span><span class="token number">250</span>, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;EMA Length 9&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">// Toggle switches <span class="token keyword">for</span> each EMA</span>
<span class="line">show_ema1 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema2 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema3 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 3&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema4 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 4&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema5 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;SShow EMA 5&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema6 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 6&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema7 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 7&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema8 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 8&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema9 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 9&quot;</span><span class="token punctuation">)</span></span>
<span class="line">show_ema10 <span class="token operator">=</span> input<span class="token punctuation">(</span>true, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;Show EMA 10&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">// Calculate EMAs</span>
<span class="line">ema1 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_1<span class="token punctuation">)</span></span>
<span class="line">ema2 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_2<span class="token punctuation">)</span></span>
<span class="line">ema3 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_3<span class="token punctuation">)</span></span>
<span class="line">ema4 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_4<span class="token punctuation">)</span></span>
<span class="line">ema5 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_5<span class="token punctuation">)</span></span>
<span class="line">ema6 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_6<span class="token punctuation">)</span></span>
<span class="line">ema7 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_7<span class="token punctuation">)</span></span>
<span class="line">ema8 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_8<span class="token punctuation">)</span></span>
<span class="line">ema9 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_9<span class="token punctuation">)</span></span>
<span class="line">ema10 <span class="token operator">=</span> ta.ema<span class="token punctuation">(</span>close, length_10<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">// Plot EMAs conditionally based on toggle switches</span>
<span class="line">plot<span class="token punctuation">(</span>show_ema1 ? ema1 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.red, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema2 ? ema2 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.orange, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema3 ? ema3 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.yellow, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema4 ? ema4 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.green, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema5 ? ema5 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.blue, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;60&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema6 ? ema6 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.purple, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;55&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema7 ? ema7 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.aqua, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;89&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema8 ? ema8 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.fuchsia, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;120&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema9 ? ema9 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.gray, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;200&quot;</span><span class="token punctuation">)</span></span>
<span class="line">plot<span class="token punctuation">(</span>show_ema9 ? ema9 <span class="token builtin class-name">:</span> na, <span class="token assign-left variable">color</span><span class="token operator">=</span>color.lime, <span class="token assign-left variable">title</span><span class="token operator">=</span><span class="token string">&quot;250&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=n(e,[["render",l],["__file","Trading.html.vue"]]),r=JSON.parse('{"path":"/Index/Trading.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Andy MACD","slug":"andy-macd","link":"#andy-macd","children":[]},{"level":2,"title":"EMA","slug":"ema","link":"#ema","children":[]}],"git":{"updatedTime":1730087335000,"contributors":[{"name":"rhyme_yang","email":"rhyme_yang@live.cn","commits":1}]},"filePathRelative":"Index/Trading.md"}');export{c as comp,r as data};
