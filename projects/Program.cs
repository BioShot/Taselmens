using System;

namespace MyApp // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args)
        {
            if(args.Length != 0){
                if(args[0] == "-web"){
                    string mode = "taselaccess";
                    if(args[1] == "-data"){
                        if(args[2] == "-save"){}
                    }
                }
            }
        }
    }
}