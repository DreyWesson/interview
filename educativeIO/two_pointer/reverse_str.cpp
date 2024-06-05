#include <iostream>
int reverse_str(std::string str)
{

    int tail = 0;
    int head = str.size() - 1;
    char tmp;

    while (tail < head)
    {
        tmp = str[tail];
        str[tail] = str[head];
        str[head] = tmp;
        head--;
        tail++;
    }
    std::cout << str << std::endl;
    return (0);
}
int main(void)
{
    reverse_str("RACEACAR");
    return (0);
}