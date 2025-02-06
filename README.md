# 🌊 **Rainwater Trapper 3000** 

Welcome to the **Rainwater Trapper 3000**—the most **efficient**, **zero-maintenance**, and **100% free** way to **store virtual water** without any buckets, sponges, or government regulations! 

## **What is this sorcery?**  
Ever wondered how much water would get trapped between hills if Mother Nature played Tetris? Well, wonder no more! This **super-optimized** JavaScript function calculates exactly how much water can get stuck between random bars. It's like **counting puddles after a storm**, but with fewer wet socks.  

## **How It Works**  
1. Look at the ground.  
2. Imagine some uneven heights (because life isn’t fair).  
3. Watch as rainwater magically gets trapped between them.  
4. Use this **magical function** to measure the sadness of tiny trapped water molecules.  

## **How It Works**  
- Uses the **two-pointer technique** instead of brute force because we're not cavemen.  
- Keeps track of the **left max (lm)** and **right max (rm)** to avoid unnecessary calculations.  
- Runs in a smooth **O(n) time complexity**, meaning it’s faster than your morning coffee reaching your bloodstream.  

## **Installation**  
Just copy-paste this bad boy into your JavaScript project:  

```js
var trap = function(h) {
    let l = 0, r = h.length - 1, lm = 0, rm = 0, w = 0;
    
    while (l < r) {
        if (h[l] < h[r]) {
            lm = Math.max(lm, h[l]);
            w += lm - h[l++];
        } else {
            rm = Math.max(rm, h[r]);
            w += rm - h[r--];
        }
    }
    
    return w;
};
