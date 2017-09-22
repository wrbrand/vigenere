#include <stdio.h>
#define KEY_LENGTH 7

main(){  
  unsigned char ch;  
  FILE *fpIn, *fpOut;  
  int i;  unsigned char key[KEY_LENGTH] = {0xAF, 0xE3, 0xF9, 0x4A, 0xAA, 0x79, 0xE7};
  /* of course, I did not use the all-0s key to encrypt */

  fpIn = fopen("ptext.txt", "r");  
  fpOut = fopen("ctext.txt", "w");
  i=0;  
  while (fscanf(fpIn, "%c", &ch) != EOF) {
   if (ch!='\n') {      
     fprintf(fpOut, "%02X", ch ^ key[i % KEY_LENGTH]); 
     i++;      }    
  }   
 
  fclose(fpIn);  
  fclose(fpOut);  
  return;
} 