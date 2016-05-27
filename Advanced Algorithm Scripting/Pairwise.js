function pairwise(arr, arg) {

 	var sum = 0;
  	for(i=0;i<arr.length;i++){
 		for(j=i+1;j<arr.length;j++){
		   	if(arr[i]+arr[j] ==arg){
		     	sum += i+j;
		     	arr[i] =arr[j] = NaN;
		    }
   		} 
  	}
 	return sum;
}

pairwise([1, 1, 1], 2)