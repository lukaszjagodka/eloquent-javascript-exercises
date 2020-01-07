/* Exercise 1 from chapter 2 - Looping a triangle
  Write a loop that makes seven calls to console.log to output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/

signs = '';
for(let i = 0; i <7; i++){
  signs+='#';
  console.log(signs)
}