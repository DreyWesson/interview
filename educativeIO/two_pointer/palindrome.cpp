#include <iostream>
bool is_palindrome(std::string str)
{
    int tail = 0;
    int head = str.size() - 1;
    while (tail < head)
    {
        if (str[tail] != str[head])
        {
            std::cout << "false";
            return (false);
        }
        head--;
        tail++;
    }
    std::cout << "true";
    return (true);
}

int main(void)
{
    is_palindrome("RACECAR");
    return (0);
}