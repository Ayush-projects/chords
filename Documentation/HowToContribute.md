###Guidelines
>**After going through the steps given below you will be able to understand
how to contribute to this project. **

- **Step 1**
For open-source contribution, all you need is a version control software like git which keeps track of all the states(assume it as version) of a project.
Git can be downloaded by following the link - https://git-scm.com/download/win
![image](https://user-images.githubusercontent.com/62644568/111185737-4dd27380-85d8-11eb-92d6-6c09dee5602b.png)

- **Step 2**
After installing git all you need a project to contribute.
![image](https://user-images.githubusercontent.com/62644568/111187563-1d8bd480-85da-11eb-87ae-8ec63e5a4e55.png)

- **Step 3**
Now all you need to do is to clone that repo locally into your pc and work on it. To clone a repo from GitHub all you need to do is to fork that repo in your own Github account. It gives you freedom to work on the project anytime anywhere. For this you just need to click **Fork** .
![image](https://user-images.githubusercontent.com/62644568/111188408-08637580-85db-11eb-9f9d-666898181a39.png)

- **Step 3**
After forking , you'll need to clone it locally on your pc. To clone a project locally on your pc, all you need to copy the repo link (the forked version in your own Github account) which you can find after clicking on the **code** icon.
![image](https://user-images.githubusercontent.com/62644568/111188862-81fb6380-85db-11eb-9f1e-ed26cb8856d1.png)

- **Step 4**
Now move on to your local environment and open a folder, for example here I am using VS, code editor because it has an inbuilt terminal that helps us to run git commands along with the editor functionality.
![image](https://user-images.githubusercontent.com/62644568/111191058-afe1a780-85dd-11eb-8988-be9665be0da4.png)

- **Step 4**
Type commantd **git clone *repository link***  in the terminal (repo link of your forked version).
![image](https://user-images.githubusercontent.com/62644568/111191891-85dcb500-85de-11eb-9d7c-455344bf5e59.png)
> Now you see the **chords** folder.This is where the project lies.
Now , you need to chnage directory to that particular folder 
![image](https://user-images.githubusercontent.com/62644568/111192522-28953380-85df-11eb-88a1-b114f029cd8d.png)

- **Step 5**
Now ,  you  have to set an upstream to the parent repo so that we can get an updated version of the project anytime.
Type command **git remote add upstream *parent repository link*** .
![image](https://user-images.githubusercontent.com/62644568/111193388-1e276980-85e0-11eb-94b0-7c3d4bbc59cc.png)
> copy the link

Now , to get an updated version locally, Type command **git pull upstream main**
![image](https://user-images.githubusercontent.com/62644568/111194110-dd7c2000-85e0-11eb-8310-ab91abebc3d6.png)

>After following all the steps mentioned above , your local environment should look like this.You can see you the updated version of the project.

![image](https://user-images.githubusercontent.com/62644568/111194577-5a0efe80-85e1-11eb-86d3-e9bf39633f95.png)

######You are up now to contribute.
- **Step 6**
It is adviced to create a **branch** to fix the bugs or add features.The new branch will have all the codes from the **main branch**.
###### - Type command **git branch *branch_name*** to create branch.
###### - Type command **git checkout *branch_name***to enter in that branch
![image](https://user-images.githubusercontent.com/62644568/111197143-1ec1ff00-85e4-11eb-8c05-da7e93a1bb64.png)
###### - You can always check the current branch you are working in by command **git branch**
![image](https://user-images.githubusercontent.com/62644568/111197363-66488b00-85e4-11eb-9265-126c48328b34.png)
> *  (*) Shows the active branch

- **Step 7** Fix the bug

- **Step 8** Stage and commit your changes before you push them.
>*  Type **git add .** to stage the files first.
>*  Type **git commit -m "Typo error fixed(message)"** to commit.
![image](https://user-images.githubusercontent.com/62644568/111199808-128b7100-85e7-11eb-889b-5407b590e93c.png)

- **Step 9**
Now, push the changes to the repository.
>Type command  **git push origin branch_name**

![image](https://user-images.githubusercontent.com/62644568/111201204-8ed28400-85e8-11eb-8e87-9f483cffa69c.png)

- **Step 10**
So, you can request the project administrator to review the changes and add them to the main repo of the project. So, you have to create a pull request for the project administrator. Create a pull request, by clicking compare and pull request.
![image](https://user-images.githubusercontent.com/62644568/111202080-7ca51580-85e9-11eb-9f36-c971ea742804.png)

#### Now, the project administrator would be able to review the pull request and can merge it into the main branch.

>Make sure that whenever you are working on a bug, it(bug) should be there in the updated version, there might be a possibility that someone else has fixed the bug in the updated version.**Do not waste your time**

#Congratulations!
###You are all set to become a contributor.
