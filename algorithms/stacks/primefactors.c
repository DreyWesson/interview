/**
 * Print the prime factors of a num in descending order including itself.
*/

#include<stdio.h>
#include<unistd.h>

static int tail = -1;
static int arr[100];

void	push(int val)
{
	int	i;

	if ((tail + 1) > 5) return;
	tail++;
	i = tail;
	if (tail != 0) {
		while (i < 6 && i > 0)
		{
			arr[i] = arr[i - 1];
			i--;
		}
	}
	arr[0] = val;
}

void prime_num(int n) {
	int i;
	int tmp;

	i = 2;
	tmp = n;
	while (n && i <= n)
	{
		if (n % i)
			i++;
		else
		{
			n /= i;
			if (i == tmp)
				break;
			push(i);
		}
	}
	push(tmp);
}


int	main(void) {
	prime_num(11);

	while (tail >= 0 && arr[tail]) {
		printf("tail: %d, val: %d\n", tail, arr[tail]);
		tail--;
	}
	return (0);
}
