import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestSingupPage {
    private final static String LOCATION = "C:\\Program Files\\chromedriver_win32\\chromedriver.exe ";
    private final static String FILE_LOCATON  ="D:\\Education\\3rd Year\\Second Semister\\Software Engineering\\Lab and Assingment\\final project\\front end\\html\\";

    public static  int passed  = 0;
    public static  int failed = 0;
    private static String firstName = "Natnael";
    private static String lastName  = "Sisay";
    private static String userName  = "javaTheGlorious";
    private static String email     = "natyjava8@gmail.com";
    private static String password  = "Djava";
    private static String confirm   = "Djava";

    public static void main(String[] args){
        TestSingupPage test = new TestSingupPage();

        test.testSignupWithAllValidInputs();
        test.testSignUpFormWithInvalidFirstname();
        test.testSignUpFormWithInvalidLastname();
        test.testSignUpFormWithInvalidUsername();
        test.testSignUpFormWithInvalidEmail();
        test.testSignUpFormWithInvalidPassword();
        test.testSignUpFormWithInvalidConfirm();
        test.testSignUpNoInputField();

        System.out.println("\tResult\nPassed : "+passed+" \tFailed : "+failed);
    }

    public void  testSignupWithAllValidInputs(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");

//        get the input element and button
//        WebElement searchInput = driver.findElement(By.id("q"));
//        WebElement searchButton = driver.findElement(By.id("searchButton"));

        WebElement iFirstName   = driver.findElement(By.id("firstName"));
        WebElement iLastName    = driver.findElement((By.id("lastName")));
        WebElement iUserName    = driver.findElement((By.id("userName")));
        WebElement iEmail       = driver.findElement((By.id("email")));
        WebElement iPassword    = driver.findElement((By.id("password")));
        WebElement iConfirm     = driver.findElement((By.id("confirm")));

        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));

        iFirstName.sendKeys(firstName);
        iLastName.sendKeys(lastName);
        iUserName.sendKeys(userName);
        iEmail.sendKeys(email);
        iPassword.sendKeys(password);
        iConfirm.sendKeys(confirm);

        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Login")){
            System.out.println("Test Signup With All ValidInputs [ Passed ]");
            passed +=1;
        }else{
            System.out.println("Test Signup With All ValidInputs [ Failed ]");
            failed += 1;
        }

        driver.close();




    }

    public void testSignUpFormWithInvalidFirstname(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");

        firstName = "notvalied 12134434";
        WebElement iFirstName   = driver.findElement(By.id("firstName"));
        WebElement iLastName    = driver.findElement((By.id("lastName")));
        WebElement iUserName    = driver.findElement((By.id("userName")));
        WebElement iEmail       = driver.findElement((By.id("email")));
        WebElement iPassword    = driver.findElement((By.id("password")));
        WebElement iConfirm     = driver.findElement((By.id("confirm")));

        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));

        iFirstName.sendKeys(firstName);
        iLastName.sendKeys(lastName);
        iUserName.sendKeys(userName);
        iEmail.sendKeys(email);
        iPassword.sendKeys(password);
        iConfirm.sendKeys(confirm);

        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Signup")){
            System.out.println("Test SignUp Form With Invalid Firstname [ Passed ]");
            passed += 1;

        }else{
            System.out.println("Test SignUp Form With Invalid Firstname [ Failed ]");
            failed += 1;
        }
        firstName = "Natnael";
        driver.close();


    }

    public void testSignUpFormWithInvalidLastname(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");

        lastName = "notvalied 12134434";
        WebElement iFirstName   = driver.findElement(By.id("firstName"));
        WebElement iLastName    = driver.findElement((By.id("lastName")));
        WebElement iUserName    = driver.findElement((By.id("userName")));
        WebElement iEmail       = driver.findElement((By.id("email")));
        WebElement iPassword    = driver.findElement((By.id("password")));
        WebElement iConfirm     = driver.findElement((By.id("confirm")));

        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));

        iFirstName.sendKeys(firstName);
        iLastName.sendKeys(lastName);
        iUserName.sendKeys(userName);
        iEmail.sendKeys(email);
        iPassword.sendKeys(password);
        iConfirm.sendKeys(confirm);

        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Signup")){
            System.out.println("Test SignUp Form With Invalid Last Name [ Passed ]");
            passed += 1;
        }else{
            System.out.println("Test SignUp Form With Invalid Last Name [ Failed ]");
            failed += 1;
        }
        lastName = "Sisay";

        driver.close();


    }

    public void testSignUpFormWithInvalidUsername(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");

        userName = "%^%^&^^&^";
        WebElement iFirstName   = driver.findElement(By.id("firstName"));
        WebElement iLastName    = driver.findElement((By.id("lastName")));
        WebElement iUserName    = driver.findElement((By.id("userName")));
        WebElement iEmail       = driver.findElement((By.id("email")));
        WebElement iPassword    = driver.findElement((By.id("password")));
        WebElement iConfirm     = driver.findElement((By.id("confirm")));

        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));

        iFirstName.sendKeys(firstName);
        iLastName.sendKeys(lastName);
        iUserName.sendKeys(userName);
        iEmail.sendKeys(email);
        iPassword.sendKeys(password);
        iConfirm.sendKeys(confirm);

        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Signup")){
            System.out.println("Test SignUp Form With Invalid User Name [ Passed ]");
            passed += 1;
        }else{
            System.out.println("Test SignUp Form With Invalid User Name [ Failed ]");
            failed += 1;
        }
        userName = "javaTheGlorious";
        driver.close();


    }

    public void testSignUpFormWithInvalidEmail(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");


        email = "natyjava8gmail.com";
        WebElement iFirstName   = driver.findElement(By.id("firstName"));
        WebElement iLastName    = driver.findElement((By.id("lastName")));
        WebElement iUserName    = driver.findElement((By.id("userName")));
        WebElement iEmail       = driver.findElement((By.id("email")));
        WebElement iPassword    = driver.findElement((By.id("password")));
        WebElement iConfirm     = driver.findElement((By.id("confirm")));

        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));

        iFirstName.sendKeys(firstName);
        iLastName.sendKeys(lastName);
        iUserName.sendKeys(userName);
        iEmail.sendKeys(email);
        iPassword.sendKeys(password);
        iConfirm.sendKeys(confirm);

        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Signup")){
            System.out.println("Test SignUp Form With Invalid Email [ Passed ]");
            passed += 1;
        }else{
            System.out.println("Test SignUp Form With Invalid Email [ Failed ]");
            failed += 1;
        }
        email = "natyjava8@gmail.com";
        driver.close();


    }

    public void testSignUpFormWithInvalidPassword(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");

        password = "four";
        WebElement iFirstName   = driver.findElement(By.id("firstName"));
        WebElement iLastName    = driver.findElement((By.id("lastName")));
        WebElement iUserName    = driver.findElement((By.id("userName")));
        WebElement iEmail       = driver.findElement((By.id("email")));
        WebElement iPassword    = driver.findElement((By.id("password")));
        WebElement iConfirm     = driver.findElement((By.id("confirm")));

        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));

        iFirstName.sendKeys(firstName);
        iLastName.sendKeys(lastName);
        iUserName.sendKeys(userName);
        iEmail.sendKeys(email);
        iPassword.sendKeys(password);
        iConfirm.sendKeys(confirm);

        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Signup")){
            System.out.println("Test SignUp Form With Invalid Password [ Passed ]");
            passed += 1;
        }else{
            System.out.println("Test SignUp Form With Invalid Password [ Failed ]");
            failed += 1;
        }
        password = "password";
        driver.close();


    }

    public void testSignUpFormWithInvalidConfirm(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");

        confirm = "notPassword";
        WebElement iFirstName   = driver.findElement(By.id("firstName"));
        WebElement iLastName    = driver.findElement((By.id("lastName")));
        WebElement iUserName    = driver.findElement((By.id("userName")));
        WebElement iEmail       = driver.findElement((By.id("email")));
        WebElement iPassword    = driver.findElement((By.id("password")));
        WebElement iConfirm     = driver.findElement((By.id("confirm")));

        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));

        iFirstName.sendKeys(firstName);
        iLastName.sendKeys(lastName);
        iUserName.sendKeys(userName);
        iEmail.sendKeys(email);
        iPassword.sendKeys(password);
        iConfirm.sendKeys(confirm);

        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Signup")){
            System.out.println("Test SignUp Form With Invalid Confirmation [ Passed ]");
            passed += 1;
        }else{
            System.out.println("Test SignUp Form With Invalid Confirmation [ Failed ]");
            failed += 1;
        }
        confirm = "password";
        driver.close();


    }

    public void testSignUpNoInputField(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"signup.html");


        WebElement signUpButton = driver.findElement((By.id("theSingupForm")));


        signUpButton.click();

        if(driver.getTitle().equalsIgnoreCase("Signup")){
            System.out.println("Test SignUp Form With No Input [ Passed ]");
            passed += 1;
        }else{
            System.out.println("Test SignUp Form With No Input [ Failed ]");
            failed += 1;
        }

        driver.close();


    }


}
