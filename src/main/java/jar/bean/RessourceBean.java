package jar.bean;

public class RessourceBean {
    private int id;
    private String type;
    private float price;
    private int persons;
    private String smoker;
    private int number;
    private String street;
    private int postal;
    private String city;


    public RessourceBean(){}
    
    public int getId(){
        return this.id;
    }
    public void setId(int id){
        this.id = id;
    }
    public String getType(){
        return this.type;
    }
    public void setType(String type){
        this.type = type;
    }
    public float getPrice(){
        return this.price;
    }
    public void setPrice(float price){
        this.price = price;
    }
    public String getSmoker(){
        return this.smoker;
    }
    public void setSmoker(String smoker){
        this.smoker = smoker;
    }
    public int getPersons(){
        return this.persons;
    }
    public void setPersons(int persons){
        this.persons = persons;
    }    
    public int getNumber(){
        return this.number;
    }
    public void setNumber(int number){
        this.number = number;
    }
    public String getStreet(){
        return this.street;
    }
    public void setStreet(String street){
        this.street = street;
    }
    public int getPostal(){
        return this.postal;
    }
    public void setPostal(int postal){
        this.postal = postal;
    }
    public String getCity(){
        return this.city;
    }
    public void setCity(String city){
        this.city = city;
    }
    public String getAdresse(){
        return this.number + " " + this.street + " " + this.city + " " + this.postal;
    }
}

