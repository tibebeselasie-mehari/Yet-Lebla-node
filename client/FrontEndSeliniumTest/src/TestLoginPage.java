import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestLoginPage {
    private final static String LOCATION = "C:\\Program Files\\chromedriver_win32\\chromedriver.exe ";
    private final static String FILE_LOCATON = "D:\\Education\\3rd Year\\Second Semister\\Software Engineering\\Lab and Assingment\\final project\\front end\\html\\";

    private static String userName = "javaTheGlorious";
    private static String password = "Djava";
    public static int passed = 0;
    public static int failed = 0;


    public static void main(String[] args) {
        TestLoginPage test = new TestLoginPage();

        System.out.println("\tTEST-BEGIN");
        test.testLoginWithValidData();
        test.testLoginWithInValidUserName();
        test.testLogInWithInvalidPassword();
        test.testLoginWithSmallPassword();
        test.testLoginWithNoInputData();
        test.testLoginWhenLinkClicked();

        System.out.println("\tResult\nPassed : "+passed+" \tFailed : "+failed);


    }

    public void testLoginWithValidData() {
        System.setProperty("webdriver.chrome.driver", LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON + "login.html");

        WebElement iUserName = driver.findElement((By.id("userName")));
        WebElement iPassword = driver.findElement((By.id("password")));

        WebElement loginButton = driver.findElement((By.id("theLoginForm")));

        iUserName.sendKeys(userName);
        iPassword.sendKeys(password);

        loginButton.click();

        if (driver.getTitle().equalsIgnoreCase("Login")) {
            System.out.println("Test Login With All ValidInputs [ Passed ]");
            passed += 1;
        } else {
            System.out.println("Test Login With All ValidInputs [ Failed ]");
            failed += 1;
        }

        driver.close();
    }

    public void testLoginWithInValidUserName() {
        System.setProperty("webdriver.chrome.driver", LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON + "login.html");

        WebElement iUserName = driver.findElement((By.id("userName")));
        WebElement iPassword = driver.findElement((By.id("password")));

        WebElement loginButton = driver.findElement((By.id("theLoginForm")));


        userName = "chracter @#@#$#$";
        iUserName.sendKeys(userName);
        iPassword.sendKeys(password);

        loginButton.click();

        if (driver.getTitle().equalsIgnoreCase("Login")) {
            System.out.println("Test Login With Invalid User Name [ Passed ]");
            passed += 1;
        } else {
            System.out.println("Test Login With Invalid User Name [ Failed ]");
            failed += 1;
        }
        userName = "javaTheGlorious";
        driver.close();
    }
    public  void testLogInWithInvalidPassword(){
        System.setProperty("webdriver.chrome.driver", LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON + "login.html");

        WebElement iUserName = driver.findElement((By.id("userName")));
        WebElement iPassword = driver.findElement((By.id("password")));

        WebElement loginButton = driver.findElement((By.id("theLoginForm")));


        password = "pass should not be longer than 32 character other wise it is error";
        iUserName.sendKeys(userName);
        iPassword.sendKeys(password);

        loginButton.click();

        if (driver.getTitle().equalsIgnoreCase("Login")) {
            System.out.println("Test Login With Invalid Password [ Passed ]");
            passed += 1;
        } else {
            System.out.println("Test Login With Invalid Password [ Failed ]");
            failed += 1;
        }
        password = "password";
        driver.close();
    }
    public void testLoginWithSmallPassword(){
        System.setProperty("webdriver.chrome.driver", LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON + "login.html");

        WebElement iUserName = driver.findElement((By.id("userName")));
        WebElement iPassword = driver.findElement((By.id("password")));

        WebElement loginButton = driver.findElement((By.id("theLoginForm")));


        password = "pass";
        iUserName.sendKeys(userName);
        iPassword.sendKeys(password);

        loginButton.click();

        if (driver.getTitle().equalsIgnoreCase("Login")) {
            System.out.println("Test Login With Invalid Small Password [ Passed ]");
            passed += 1;
        } else {
            System.out.println("Test Login With Invalid Small Password [ Failed ]");
            failed += 1;
        }
        password = "pass";
        driver.close();
    }

    public void testLoginWithNoInputData(){
        System.setProperty("webdriver.chrome.driver", LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON + "login.html");

        WebElement iUserName = driver.findElement((By.id("userName")));
        WebElement iPassword = driver.findElement((By.id("password")));

        WebElement loginButton = driver.findElement((By.id("theLoginForm")));



//        iUserName.sendKeys(userName);
//        iPassword.sendKeys(password);

        loginButton.click();

        if (driver.getTitle().equalsIgnoreCase("Login")) {
            System.out.println("Test Login With No Input [ Passed ]");
            passed += 1;
        } else {
            System.out.println("Test Login With No Input [ Failed ]");
            failed += 1;
        }

        driver.close();
    }

    public void testLoginWhenLinkClicked(){
        System.setProperty("webdriver.chrome.driver", LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON + "login.html");

        WebElement loginButton = driver.findElement((By.id("toSingUp")));


        loginButton.click();

        if (driver.getTitle().equalsIgnoreCase("Login")) {
            System.out.println("Test Login When Link Clicked [ Failed ]");
            failed += 1;
        } else {
            System.out.println("Test Login When Link Clicked [ Passed ]");
            passed += 1;
        }

        driver.close();
    }
}