import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.Objects;

public class testIndexPage {
    private final static String LOCATION = "C:\\Program Files\\chromedriver_win32\\chromedriver.exe ";
    private final static String FILE_LOCATON  ="D:\\Education\\3rd Year\\Second Semister\\Software Engineering\\Lab and Assingment\\final project\\front end\\html\\";

    public static int passed = 0;
    public static int failed = 0;
    public static void main(String[] args){
        testIndexPage test = new testIndexPage();

        System.out.println("\tBEGIN TEST");
        test.testSearchWithData();
        test.testSearchWithNoData();
        test.testWithDropdownAllSelectedAndValidData();
        test.testWithDropdownAllSelectedAndNotValidData();
        test.testWithDropdownFoodSelectedAndValidData();
        test.testWithDropdownFoodSelectedAndNotValidData();
        test.testWithDropdownPlacesSelectedAndValidData();
        test.testWithDropdownPlacesSelectedAndNotValidData();
        test.testSearchWithExistingFood();
        test.testSearchWithNonExistingFood();
        test.testSearchExistingPlace();
        test.testSearchNonExistingPlace();
        test.tetSearchBothPlaceAndFood();
        System.out.println("\tResult\nPassed : "+passed+" \tFailed : "+failed);

    }

    private void testSearchWithData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();

        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));

        searchInput.sendKeys("burger");

        searchButton.click();

        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test With Data [Passed]");
        }else{
            System.out.println("Test With Data [Failed]");
        }
        System.out.println(driver.getTitle());





        try{
            Thread.sleep(2000);
        }catch (Exception ignored){

        }
        driver.close();

    }

    private void testSearchWithNoData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));

        searchButton.click();

        if((driver.getTitle()).equalsIgnoreCase("Yet[lebela]") ){
            System.out.println("TestSearch with not-valid Data [Passed]");
        }else{
            System.out.println("TestSearch with not-valid Data [Failed]");
        }

        driver.close();
    }

    public  void testWithDropdownAllSelectedAndValidData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");


//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        WebElement filterAll    = driver.findElement(By.id("all"));


        filterOption.click();
        filterAll.click();
        searchInput.sendKeys("burger");
        searchButton.click();



        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test with Dropdown all selected and Valid Data [Passed]");
            passed += 1;

        }else{
            failed +=1;
            System.out.println("Test with Dropdown all selected and Valid Data [Failed]");
        }
        try{
            Thread.sleep(1000);
        }catch (Exception ignore){

        }
        driver.close();

    }
    public  void testWithDropdownAllSelectedAndNotValidData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        WebElement filterAll    = driver.findElement(By.id("all"));

//        not putting field on the input is a not valida data
        filterOption.click();
        filterAll.click();
        searchButton.click();

        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test with Dropdown all selected and Not Valid Data [Passed]");
            passed += 1;

        }else{
            failed +=1;
            System.out.println("Test with Dropdown all selected and Not Valid Data [Failed]");
        }
        driver.close();
    }

    public void testWithDropdownFoodSelectedAndValidData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();
        WebElement filterAll    = driver.findElement(By.id("food"));


        searchInput.sendKeys("burger");
        filterAll.click();
        searchButton.click();

        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test with Dropdown Food selected and Valid Data [Passed]");
            passed += 1;

        }else{
            failed +=1;
            System.out.println("Test with Dropdown Food selected and Valid Data [Failed]");
        }
        driver.close();
    }
    public void testWithDropdownFoodSelectedAndNotValidData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("food"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();

        filterAll.click();
        searchButton.click();

        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test with Dropdown Food selected and Not Valid Data [ Failed ]");
            failed += 1;

        }else{
            passed +=1;
            System.out.println("Test with Dropdown Food selected and Not Valid Data [ Passed ]");
        }

        driver.close();
    }

    public void testWithDropdownPlacesSelectedAndValidData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("places"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();

        searchInput.sendKeys("4kilo");
        filterAll.click();
        searchButton.click();

        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test with Dropdown Places selected and Valid Data [Passed]");
            passed += 1;

        }else{
            failed +=1;
            System.out.println("Test with Dropdown Places selected and Valid Data [Failed]");
        }

        driver.close();
    }

    public void testWithDropdownPlacesSelectedAndNotValidData(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("places"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();

        filterAll.click();
        searchButton.click();

        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test with Dropdown Places selected and Not Valid Data [ Failed ]");
            failed += 1;

        }else{
            passed +=1;
            System.out.println("Test with Dropdown Places selected and Not Valid Data  [ Passed ]");
        }

        driver.close();
    }


    public void testSearchWithExistingFood(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("food"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();


        searchInput.sendKeys("burger");
        searchButton.click();
        filterAll.click();

//        searchResult should be > 0
        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test Existing Food [ Failed ]");
            failed += 1;

        }else{
            passed +=1;
            System.out.println("Test Existing Food [ Passed ]");
        }

        try{
            Thread.sleep(200);
        }catch (Exception e){

        }

        driver.close();
    }
    public void testSearchWithNonExistingFood(){

        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("food"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();

        filterAll.click();
        searchInput.sendKeys("burger");
        searchButton.click();


//        searchResult should be > 0
        WebElement result   = driver.findElement(By.id("searchResult"));
        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test Search With Not Existing Food [Passed]");
            passed += 1;

        }else{
            failed +=1;
            System.out.println("Test Search With Not Existing Food  [Failed]");
        }


        try{
            Thread.sleep(200);
        }catch (Exception e){

        }

    }

    public void testSearchExistingPlace(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("places"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();

        filterAll.click();
        searchInput.sendKeys("4kilo");
        searchButton.click();


//        searchResult should be > 0
        WebElement result   = driver.findElement(By.id("searchResult"));
        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test Search With  Existing Place [Passed]");
            passed += 1;

        }else{
            failed +=1;
            System.out.println("Test Search With  Existing Place  [Failed]");
        }

        try{
            Thread.sleep(200);
        }catch (Exception e){

        }

        driver.close();
    }
    public  void  testSearchNonExistingPlace(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("places"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();

        searchInput.sendKeys("burger");
        searchButton.click();


//        searchResult should be > 0
//        WebElement result   = driver.findElement(By.id("searchResult"));
        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test Search With Not Existing Place [Passed]");
            failed += 1;

        }else{
            passed +=1;
            System.out.println("Test Search With Not Existing Place  [Failed]");
        }

        try{
            Thread.sleep(200);
        }catch (Exception e){

        }

        driver.close();
    }

    public void tetSearchBothPlaceAndFood(){
        System.setProperty("webdriver.chrome.driver",LOCATION);
        WebDriver driver = new ChromeDriver();
        driver.get(FILE_LOCATON+"index.html");

//        get the input element and button
        WebElement searchInput = driver.findElement(By.id("q"));
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        WebElement filterAll    = driver.findElement(By.id("all"));
        WebElement filterOption    = driver.findElement(By.id("filterOption"));
        filterOption.click();

        searchInput.sendKeys("burger");
        searchButton.click();


//        searchResult should be > 0
        WebElement result   = driver.findElement(By.id("searchResult"));
        if(driver.getTitle().equalsIgnoreCase("Search Result")){
            System.out.println("Test Search Both Food and Places [ Passed ]");
            passed += 1;

        }else{
            failed +=1;
            System.out.println("Test Search Both Food and Places [ Failed ]");
        }


        try{
            Thread.sleep(200);
        }catch (Exception e){

        }

        driver.close();
    }
}
