
import os
import shutil


def main():
    dir = os.listdir("./git/hooks/")
    actual_dir = os.listdir(".git/hooks/")
    for file in dir:
        # if file in actual_dir:
        #     continue
        resp = input(file + " Do you want to move this file into the git hooks directory ? [y/n] ")
        if resp == "y":
            shutil.copy(f"./git/hooks/{file}", f".git/hooks/{file}")
        else:
            continue

if __name__ == "__main__":
    main()
