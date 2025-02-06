var trap = function(h) {
    let left = 0, right = h.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;

    // Use two pointers, moving inward from both ends
    while (left < right) {
        // Work with the smaller height to ensure we find the limiting boundary
        if (h[left] < h[right]) {
            // Update leftMax to the larger value encountered so far
            leftMax = Math.max(leftMax, h[left]);
            // Add water trapped at the current position
            water += leftMax - h[left];
            left++;
        } else {
            // Update rightMax to the larger value encountered so far
            rightMax = Math.max(rightMax, h[right]);
            // Add water trapped at the current position
            water += rightMax - h[right];
            right--;
        }
    }

    return water;
};
