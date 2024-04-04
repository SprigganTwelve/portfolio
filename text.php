<?php

class first
{
    private $name = "Bonjour";
    public function getName()
    {
        return $this->name;
    }
}
;

class Child extends first
{
    public $your = "name";
}

$second = new Child();
echo $second->getName();
