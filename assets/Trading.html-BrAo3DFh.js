import{_ as s,c as a,a as e,o as t}from"./app-DFV24MCB.js";const p={};function l(o,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h2 id="andy-macd" tabindex="-1"><a class="header-anchor" href="#andy-macd"><span>Andy MACD</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">//@version<span class="token operator">=</span><span class="token number">5</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(p,[["render",l],["__file","Trading.html.vue"]]),r=JSON.parse('{"path":"/Index/Trading.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Andy MACD","slug":"andy-macd","link":"#andy-macd","children":[]}],"git":{"updatedTime":1730087335000,"contributors":[{"name":"rhyme_yang","email":"rhyme_yang@live.cn","commits":1}]},"filePathRelative":"Index/Trading.md"}');export{c as comp,r as data};
