<?php

if(
  empty($_POST['namef1'])   ||
  empty($_POST['emailf1'])  ||
  empty($_POST['phonef1']))
  {
    echo "No arguments Provided!";
    return false;
  }

$product = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['productf1'])));

$name = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['namef1'])));
$email = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['emailf1'])));
$phone = rawurlencode(strip_tags(htmlspecialchars_decode("+91".$_POST['phonef1'])));

$state = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['statef1'])));
$org = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['orgf1'])));
$req = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['reqf1'])));

$qs = strip_tags(htmlspecialchars_decode($_POST['qsf1']));
$formid = "ProductForm";

$formq = "name=".$name."&email=".$email."&phone=".$phone."&state=".$state."&org=".$org."&req=".$req."&product=".$product."&formid=".$formid."&".$qs;

$link = "https://hook.integromat.com/36isgjg4okkkh2fc7xfsnhpl6ak9tikw/?";

$flowq = $link.$formq;

function flowtrig($flowq)
{
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $flowq);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, 1);
  $response = curl_exec($ch);
  curl_close($ch);

  if(strpos( $response, "Accepted" ) !== false)
  {
    header('Location: ./thank-you.php');
    exit();
  }
  else
  {
    header('Location: ./form-submit-failed.php');
    exit();
  }
}
flowtrig($flowq);

?>